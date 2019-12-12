import {empty} from "./helper";

const checkConfiguration = () => {
	let configVariables = [];

	if (empty(process.env.ENVIRONMENT)) {
		global.logger.error("ENVIRONMENT variable is not defined", {operationName: "createServer"});
		configVariables.push("ENVIRONMENT");
	}

	if (empty(process.env.API_NAME)) {
		global.logger.error("API_NAME variable is not defined", {operationName: "createServer"});
		configVariables.push("API_NAME");
	}

	if (empty(process.env.API_VERSION)) {
		global.logger.error("API_VERSION variable is not defined", {operationName: "createServer"});
		configVariables.push("API_VERSION");
	}

	if (empty(process.env.STUB)) {
		global.logger.error("STUB variable is not defined", {operationName: "createServer"});
		configVariables.push("STUB");
	}

	if (empty(process.env.CONTEXT_PATH)) {
		global.logger.error("CONTEXT_PATH variable is not defined", {operationName: "createServer"});
		configVariables.push("CONTEXT_PATH");
	}

	if (empty(process.env.PORT)) {
		global.logger.error("PORT variable is not defined", {operationName: "createServer"});
		configVariables.push("PORT");
	}

	if (empty(process.env.LOG_LEVEL)) {
		global.logger.error("LOG_LEVEL variable is not defined", {operationName: "createServer"});
		configVariables.push("LOG_LEVEL");
	}

	if (empty(process.env.JWT_CERTIFICATE)) {
		global.logger.error("JWT_CERTIFICATE variable is not defined", {operationName: "createServer"});
		configVariables.push("JWT_CERTIFICATE");
	}

	if (empty(process.env.PWM_DM_DATABASE)) {
		global.logger.error("PWM_DM_DATABASE variable is not defined", {operationName: "createServer"});
		configVariables.push("PWM_DM_DATABASE");
	}

	if (empty(process.env.PWM_DM_HOSTNAME)) {
		global.logger.error("PWM_DM_HOSTNAME variable is not defined", {operationName: "createServer"});
		configVariables.push("PWM_DM_HOSTNAME");
	}

	if (empty(process.env.PWM_DM_USERNAME)) {
		global.logger.error("PWM_DM_USERNAME variable is not defined", {operationName: "createServer"});
		configVariables.push("PWM_DM_USERNAME");
	}

	if (empty(process.env.PWM_DM_PASSWORD)) {
		global.logger.error("PWM_DM_PASSWORD variable is not defined", {operationName: "createServer"});
		configVariables.push("PWM_DM_PASSWORD");
	}

	if (!empty(configVariables)) {
		global.logger.error("Configuration variables are missing to start the server", {
			operationName: "createServer",
			stackTrace: `Following variables are missing -- ${configVariables}`
		});
		return false;
	} else {
		return true;
	}
};

export {checkConfiguration};