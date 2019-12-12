"use strict";

import {JWK, JWS} from "node-jose";


const validateToken = async (token) => {
	let status, error;
	try {
		let key = await JWK.asKey(global.certificate, "pem");

		let decodedToken = await JWS.createVerify(key).verify(token);

		const data = JSON.parse(decodedToken.payload.toString("utf8"));
		if (!data.exp || data.exp <= (Math.floor(Date.now() / 1000))) {
			status = "EXPIRED";
			error = "Token is expired";
			global.logger.info("The token provided is expired", {operationName: "tokenValidation"});
		}

		(status !== "EXPIRED") ? status = "OK" : "EXPIRED";

		return {
			status,
			error
		};

	} catch (err) {
		global.logger.info("Token validation threw errors", {operationName: "tokenValidation", stackTrace: err});
		status = "ERROR";
		return {status, error: "Token is not valid"};
	}

};

export {validateToken};