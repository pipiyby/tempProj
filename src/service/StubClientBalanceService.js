"use strict";
import {AuthenticationError, ValidationError} from "../errors/index";
import {empty, stringIsDate, stringIsNumber} from "../utils/helper";
import {validateToken} from "../token/index";
import {stubData1, stubData2, stubData3} from "../database/stubs/stubData";


/**
 * \"Provides client Balance\"
 * The endpoint provides details on the client Balance for an individual account or a list of account ids
 *
 * authorization String Authorization token that this system will verify.
 * accountId List PWM Account Number
 * startDate String start date in YYYYMMDD
 * endDate String end date in YYYYMMDD
 * correlationId String A tracking id provided by the calling application (optional)
 * returns clientBalanceResponse
 **/
const stubClientBalanceService = async (authorization, accountNumber) => { //eslint-disable-line no-unused-vars

	if (empty(authorization)) {
		let errorMsg = {
			code: 40001,
			message: global.httpStatusCodes["401_MESSAGE"],
			fields: [{
				name: "authorization",
				value: "Token is empty"
			}]
		};
		throw new AuthenticationError(global.httpStatusCodes.UNAUTHORIZED, global.httpStatusCodes["401_MESSAGE"], errorMsg);
	} else if (authorization && authorization.indexOf("Bearer ") === -1) {
		let errorMsg = {
			code: 40001,
			message: global.httpStatusCodes["401_MESSAGE"],
			fields: [{
				name: "authorization",
				value: "Token doesn't have a Bearer prefix to it"
			}]
		};
		throw new AuthenticationError(global.httpStatusCodes.UNAUTHORIZED, global.httpStatusCodes["401_MESSAGE"], errorMsg);
	} else {
		const token = authorization.substring(6).trim();
		let validateTokenResponse = await validateToken(token);

		if (validateTokenResponse.status === "EXPIRED") {
			let errorMsg = {
				code: 40002,
				message: global.httpStatusCodes["401_MESSAGE"],
				fields: [{
					name: "authorization",
					value: "Token is expired"
				}]
			};

			throw new AuthenticationError(global.httpStatusCodes.UNAUTHORIZED, global.httpStatusCodes["401_MESSAGE"], errorMsg);
		}

		// If error is undefined, then the provided token is valid
		if (validateTokenResponse.error) {
			let errorMsg = {
				code: 40003,
				message: global.httpStatusCodes["401_MESSAGE"],
				fields: [{
					name: "authorization",
					value: "Token is not valid"
				}]
			};
			throw new AuthenticationError(global.httpStatusCodes.UNAUTHORIZED, global.httpStatusCodes["401_MESSAGE"], errorMsg);
		}
	}

	/**
	 * Business logic to validate Input variables
	 * accountId should be an array and cannot be empty
	 * startDate and endDate should be a number of format YYYYMMDD
	 */
	let validationErrors = [];

	//Check for Account Id
	if (empty(accountNumber)) {
		validationErrors.push({name: "accountNumber", value: "accountNumber provided is empty"});
	} else if (accountNumber.constructor === Array) {
		accountNumber.map((val) => {
			if (val.constructor !== String) {
				validationErrors.push({name: "accountNumber", value: `${val} should be of type string`});
			}
			// if (!stringIsNumber(val)) {
			// 	validationErrors.push({name: "accountNumber", value: `${val} is not a valid accountId`});
			// }
		});
	}

	if (!empty(validationErrors)) {
		let errorMsg = {
			code: 40301,
			message: "Some parameters are missing",
			fields: validationErrors
		};
		throw new ValidationError(global.httpStatusCodes.BAD_REQUEST, "Some parameters are missing", errorMsg);
	}

	if (accountNumber.length === 1) {
		return stubData1;
	} else if (accountNumber.length === 2) {
		return stubData2;
	} else {
		return stubData3;
	}
};

export {stubClientBalanceService};