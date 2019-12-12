"use strict";

import * as fs from "fs";
import * as path from "path";
import * as http from "http";
import * as swaggerTools from "swagger-tools";
import * as  jsyaml from "js-yaml";
import * as httpStatusCodes from "http-status";
import * as winston from "winston";
import uuid from "uuid/v4";

// Get ip address and port for client details
import {getIpAddressAndPort} from "./utils/helper";
import {checkConfiguration} from "./utils/config";
import connect from "connect";

//get ipAddress and port
let {ipAddress, port} = getIpAddressAndPort();

// Set App Name
global.apiName = process.env.API_NAME;
global.apiVersion = process.env.API_VERSION;

//**********************************************
//
// Set up Logger
//
//**********************************************

const metaData = winston.format(info => {
	info.applicationName = global.apiName;
	info.applicationVersion = global.apiVersion;
	info.environment = process.env.ENVIRONMENT;
	return info;
});


const logger = winston.createLogger({
	level: process.env.LOG_LEVEL,
	transports: [
		// Log to console
		new winston.transports.Console({
			name: "console",
			json: true,
			level: process.env.LOG_LEVEL
		})
	],
	format: winston.format.combine(
		winston.format.timestamp(),
		metaData(),
		winston.format.json()
	)
});

global.logger = logger;

//**********************************************
//
// Check configuration before starting the server
//
//**********************************************


if (!checkConfiguration()) {
	process.exit(1);
} else {
	global.logger.info("All configurations are available to start the server", {operationName: "createServer"});
}

//**********************************************
//
// Create database connection
//
//**********************************************

import "./database";


//**********************************************
//
// Setup global variables for the entire application
//
//**********************************************

global.httpStatusCodes = httpStatusCodes;
global.serviceUptime = new Date();
global.certificate = process.env.JWT_CERTIFICATE;

//**********************************************
//
// Start Server
//
//**********************************************

const app = connect();

// swaggerRouter configuration
const options = {
	swaggerUi: path.join(__dirname, "/swagger.json"),
	controllers: path.join(__dirname, "./controllers"),
	useStubs: process.env.STUB
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");

const swaggerDoc = jsyaml.safeLoad(spec);

let contextPath = process.env.CONTEXT_PATH;

let uiOptions = {
	apiDocs: contextPath + "/swagger",
	swaggerUi: contextPath + "/docs"
};

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {

	// Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
	app.use(middleware.swaggerMetadata());

	// Validate Swagger requests
	app.use(middleware.swaggerValidator());

	// Route validated requests to appropriate controller
	app.use(middleware.swaggerRouter(options));

	// Serve the Swagger documents and Swagger UI
	app.use(middleware.swaggerUi(uiOptions));

	// eslint-disable-next-line no-unused-vars
	app.use(function (err, req, res, next) {
		if (err) {
			let transactionId = uuid();
			let correlationId;
			if (req.swagger.params["correlationId"]) {
				correlationId = req.swagger.params["correlationId"].value;
				res.setHeader("correlationId", correlationId ? correlationId : "");
			}
			res.statusCode = httpStatusCodes.BAD_REQUEST;
			res.setHeader("transactionId", transactionId);
			res.setHeader("Content-Type", "application/json");
			logger.log("error", "Input request validation failed", {
				operationId: "defaultServerError",
				transactionId,
				correlationId,
				stackTrace: err
			});
			const error = {
				code: 10001,
				message: err.message,
				fields: []
			};
			res.end(JSON.stringify(error));
		}
	});

	// Start the server
	http.createServer(app).listen(port, () => {
		logger.info("Started Server at " + process.env.API_NAME + " api server started. URL: http://" + ipAddress + ":" + port + contextPath, {operationName: "createServer"});
		logger.info("Swagger-ui is available on http://" + ipAddress + ":" + port + contextPath + "/docs.", {operationName: "createServer"});
	});

});
