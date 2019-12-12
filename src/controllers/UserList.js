"use strict";

import {writeJson} from "../utils/writer";
import {getLiveStatusService} from "../service/StatusService";
import uuid from "uuid/v4";

const getUserList = async (req, res) => {
	let fnStartTime = Date.now();
	let correlationId = req.swagger.params["correlationId"].value;
	let transactionId = uuid();
	res.setHeader("transactionId", transactionId);
	res.setHeader("correlationId", correlationId ? correlationId : "");
	try {
		let responseObject = await getLiveStatusService();
		writeJson(res, responseObject);
	} catch (e) {
		let errorMsg = {
			code: 50001,
			message: global.httpStatusCodes["500_MESSAGE"],
			fields: []
		};
		writeJson(res, errorMsg);
		let fnElapsedTime = (Date.now() - fnStartTime) + "ms";
		global.logger.error("Runtime Error.", {
			fnElapsedTime,
			operationName: "getLiveStatusController",
			transactionId,
			correlationId,
			stackTrace: e
		});
	}
};

export {getUserList};