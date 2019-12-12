"use strict";
import {databaseConnection} from "../database/index";

/**
 * Gets the status of the microservice itself
 *
 * returns liveStatus
 **/
const getLiveStatusService = () => {
	if (!global.serviceUptime) {
		return {
			live: false,
			liveAsOf: null,
			buildDate: null,
			githubTagId: ""
		};
	} else {
		return {
			live: true,
			liveAsOf: global.serviceUptime,
			buildDate: global.serviceUptime,
			githubTagId: ""
		};
	}
};


/**
 * Gets the status of the microservice backend systems
 * Gets the status of the entire given system, including all downstream systems.
 *
 * returns readyStatus
 **/
const getReadyStatusService = async () => {
	let responseObject = {};
	responseObject.backends = [];
	if (!global.serviceUptime) {
		responseObject.ready = false;
		responseObject.readyAsOf = null;
	} else {
		responseObject.ready = true;
		responseObject.readyAsOf = global.serviceUptime;
	}

	try {
		await databaseConnection.sequelize.authenticate();
		responseObject.backends.push({name: "PWM_DM", status: global.httpStatusCodes.OK});
	} catch (e) {
		global.logger.error("PWM_DM error", {operationName: "readyStatusService", stackTrace: e});
		responseObject.backends.push({name: "PWM_DM", status: global.httpStatusCodes.INTERNAL_SERVER_ERROR});
		responseObject.readyAsOf = null;
		responseObject.ready = false;
	}

	return responseObject;

};

export {getLiveStatusService, getReadyStatusService};

