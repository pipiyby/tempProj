"use strict";

import {writeJson} from "../utils/writer";
import {retrieveClientBalanceService} from "../service/ClientBalanceService";
import uuid from "uuid/v4";
import {stubClientBalanceService} from "../service/StubClientBalanceService";
import {empty} from "../utils/helper";
import {RunTimeError} from "../errors";

// eslint-disable-next-line no-unused-vars
const getMasterList = async (req, res, next) => {
	// Please trim the values from request. There is a weird bug where a space is added from request package when call is coming from other micro-service.
	let authorization = req.swagger.params["Authorization"].value;
	let accountNumber = req.swagger.params["accountNumber"].value; // Trim in done before db call or rkey call
	let correlationId = req.swagger.params["correlationId"].value;

	//Check if stub is enabled (Stub flag is set for only NP1 deploy) Disabled as data is available in NP1.
	let whichService = retrieveClientBalanceService;
	if (process.env.STUB === "true") {
		whichService = stubClientBalanceService;
	}

	let fnStartTime = Date.now();
	let transactionId = uuid();
	res.setHeader("correlationId", correlationId ? correlationId : "");
	res.setHeader("transactionId", transactionId);
	try {
		let response = await whichService(authorization, accountNumber, transactionId, correlationId);
		writeJson(res, response);
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		global.logger.info("Served retrieveClientBalance", {
			fnElapsedTime,
			operationName: "controller",
			transactionId,
			correlationId
		});
	} catch (e) {
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		// Create a proper structured response and send it to the client
		if (e.errorResponse) {
			let errorObject = e.errorResponse;
			errorObject.name = empty(e.name) ? "Execution Error" : e.name;
			writeJson(res, errorObject, e.statusCode);
			global.logger.error("Predefined Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e
			});
		} else {
			global.logger.error("Dynamic Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e.stack
			});

			let errorMsg = {
				code: 50000,
				message: "Runtime error. Contact API Team with correlationId and transactionId",
				fields: []
			};
			writeJson(res, new RunTimeError(global.httpStatusCodes.INTERNAL_SERVER_ERROR, "Runtime error", errorMsg), 500);
		}
	}
};

const updateMasterList = async (req, res, next) => {
	// Please trim the values from request. There is a weird bug where a space is added from request package when call is coming from other micro-service.
	let authorization = req.swagger.params["Authorization"].value;
	let accountNumber = req.swagger.params["accountNumber"].value; // Trim in done before db call or rkey call
	let correlationId = req.swagger.params["correlationId"].value;

	//Check if stub is enabled (Stub flag is set for only NP1 deploy) Disabled as data is available in NP1.
	let whichService = retrieveClientBalanceService;
	if (process.env.STUB === "true") {
		whichService = stubClientBalanceService;
	}

	let fnStartTime = Date.now();
	let transactionId = uuid();
	res.setHeader("correlationId", correlationId ? correlationId : "");
	res.setHeader("transactionId", transactionId);
	try {
		let response = await whichService(authorization, accountNumber, transactionId, correlationId);
		writeJson(res, response);
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		global.logger.info("Served retrieveClientBalance", {
			fnElapsedTime,
			operationName: "controller",
			transactionId,
			correlationId
		});
	} catch (e) {
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		// Create a proper structured response and send it to the client
		if (e.errorResponse) {
			let errorObject = e.errorResponse;
			errorObject.name = empty(e.name) ? "Execution Error" : e.name;
			writeJson(res, errorObject, e.statusCode);
			global.logger.error("Predefined Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e
			});
		} else {
			global.logger.error("Dynamic Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e.stack
			});

			let errorMsg = {
				code: 50000,
				message: "Runtime error. Contact API Team with correlationId and transactionId",
				fields: []
			};
			writeJson(res, new RunTimeError(global.httpStatusCodes.INTERNAL_SERVER_ERROR, "Runtime error", errorMsg), 500);
		}
	}
};

const deleteMasterList = async (req, res, next) => {
	// Please trim the values from request. There is a weird bug where a space is added from request package when call is coming from other micro-service.
	let authorization = req.swagger.params["Authorization"].value;
	let accountNumber = req.swagger.params["accountNumber"].value; // Trim in done before db call or rkey call
	let correlationId = req.swagger.params["correlationId"].value;

	//Check if stub is enabled (Stub flag is set for only NP1 deploy) Disabled as data is available in NP1.
	let whichService = retrieveClientBalanceService;
	if (process.env.STUB === "true") {
		whichService = stubClientBalanceService;
	}

	let fnStartTime = Date.now();
	let transactionId = uuid();
	res.setHeader("correlationId", correlationId ? correlationId : "");
	res.setHeader("transactionId", transactionId);
	try {
		let response = await whichService(authorization, accountNumber, transactionId, correlationId);
		writeJson(res, response);
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		global.logger.info("Served retrieveClientBalance", {
			fnElapsedTime,
			operationName: "controller",
			transactionId,
			correlationId
		});
	} catch (e) {
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		// Create a proper structured response and send it to the client
		if (e.errorResponse) {
			let errorObject = e.errorResponse;
			errorObject.name = empty(e.name) ? "Execution Error" : e.name;
			writeJson(res, errorObject, e.statusCode);
			global.logger.error("Predefined Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e
			});
		} else {
			global.logger.error("Dynamic Runtime Error.", {
				fnElapsedTime,
				operationName: "controller",
				correlationId,
				transactionId,
				stackTrace: e.stack
			});

			let errorMsg = {
				code: 50000,
				message: "Runtime error. Contact API Team with correlationId and transactionId",
				fields: []
			};
			writeJson(res, new RunTimeError(global.httpStatusCodes.INTERNAL_SERVER_ERROR, "Runtime error", errorMsg), 500);
		}
	}
};

export {getMasterList, updateMasterList, deleteMasterList};