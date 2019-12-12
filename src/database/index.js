import {Sequelize} from "sequelize";
import {models} from "./models/index";

// Op is used for defining alias for operations like $and and $or. This improves security for database access.
// Please define it in the the sequelize options.

let database = process.env.PWM_DM_DATABASE;
let username = process.env.PWM_DM_USERNAME;
let password = process.env.PWM_DM_PASSWORD;
let host = process.env.PWM_DM_HOSTNAME;
let domain = process.env.ENVIRONMENT;


const sequelize = new Sequelize(database,username,password,{
	host,
	port: 1433,
	logging: false, //eslint-disable-line no-console
	dialect: "mssql",
	dialectOptions:{
		encrypt: true,
		domain: domain,
		requestTimeout: 90000,
		authentication: {
			type: "ntlm",
			options: {
				userName: username,
				password: password,
				domain: domain,
			}
		},
		options: {
			encrypt: true,
			requestTimeout: 9000,
		}
	},
	pool: {
		min: 1,
		max: 5,
		idle: 30000
	}
});



sequelize
	.authenticate()
	.then(() => {
		global.logger.info("Connection to database has been established successfully",{operationName:"dbConnection"});
	})
	.catch( err => {
		global.logger.error("Failed to open an connection to database",{operationName:"dbConnection",stackTrace:err});
	});


const databaseConnection = {
	sequelize: sequelize,
	Sequelize: Sequelize,
	Op: Sequelize.Op,
	models : models
};


export {databaseConnection};
