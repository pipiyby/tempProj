"use strict";
import moment from "moment";
import {empty, isAccountNumber} from "../utils/helper";
import {
	AuthenticationError, DataAccessError, NoContentError, ValidationError
} from "../errors/index";
import {validateToken} from "../token/index";
import {databaseConnection} from "../database/index";
import {queryForClientBalance} from "../database/queries/index";


/**
 * Provides client balance
 * The endpoint provides details on the client balance for an individual account or a list of account ids
 * authorization String Authorization token that this system will verify.
 * accountNumber List PWM Account Number
 * correlationId String A tracking id provided by the calling application (optional)
 * returns clientBalanceResponse
 **/
const retrieveClientBalanceService = async (authorization, accountNumber, transactionId, correlationId) => { //eslint-disable-line no-unused-vars
	if (process.env.ENVIRONMENT.toLowerCase() !== "np2") {
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
	}
	/**
	 * Business logic to validate Input variables
	 * accountId should be an array and cannot be empty
	 * startDate and endDate should be a number of format YYYYMMDD
	 */
	let validationErrors = [];

	if (empty(accountNumber)) {
		validationErrors.push({name: "accountId", value: "accountId provided is empty"});
	} else if (accountNumber.constructor === Array) {
		accountNumber = accountNumber.map((val) => {
			let temp = ("" + val).trim();
			if (temp.constructor !== String) {
				validationErrors.push({name: "accountNumber", value: `${temp} should be of type string`});
			} else if (!isAccountNumber(temp)) {
				validationErrors.push({name: "accountNumber", value: `${temp} is not a valid accountNumber`});
			}
			return temp;
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


	/**
	 * All the inputs are valid.
	 * Query the view and return the data
	 */

	/**
	 * Quick hack to execute the query in varchar instead of nvarchar,.
	 * Sequelize inbuilt query builder converts string to unicode, which has a performance impact on the view
	 * This performance is caused because of nvarchar usage by sequelize instead of varchar
	 * Workaround is to manually replace the query.
	 * Note: use singlequote while inserting parameters because doublequote will throw error in mssql.
	 */
	let queryString = queryForClientBalance.replace(":accountId", accountNumber.map(account => `ca.CustodianAccountID='${account.trim()}'`).join(" OR "));

	let dbStartTime = Date.now();
	let queryResultSet;
	try {

		queryResultSet = await databaseConnection.sequelize.query(queryString, {
			type: databaseConnection.sequelize.QueryTypes.RAW, raw: true
		});

		let dbEndTime = (Date.now() - dbStartTime) + "ms";
		global.logger.info("Data Access success", {
			dbElapsedTime: dbEndTime,
			operationName: "dbQuery",
			transactionId,
			correlationId
		});

	} catch (e) {
		let dbEndTime = (Date.now() - dbStartTime) + "ms";
		global.logger.info("Data Access Failed", {
			dbElapsedTime: dbEndTime,
			operationName: "dbQuery",
			transactionId,
			correlationId,
			stackTrace: e.stack
		});
		let errorMsg = {
			code: 60001,
			message: "Database Error",
			fields: []
		};
		throw new DataAccessError(global.httpStatusCodes.INTERNAL_SERVER_ERROR, "Database error", errorMsg);
	}

	let returnData = {};
	returnData.clientBalance = {};
	let response = [];
	const resultArray = queryResultSet[0];
	if (!empty(resultArray)) {
		// This means we have data returned from the DB. Time to format it.

		resultArray.map((value) => {
			response.push({
				"accountNumber": value.accountNumber ? value.accountNumber : null,
				"balance": !empty(value.currentBalance) ? value.currentBalance : 0,
				"asOfDate": value.asOfDate ? moment(value.asOfDate.toString()).format("YYYY-MM-DD") : null,
				"pendingDividend": value.pendingDividend ? value.pendingDividend : null,//to be updated in future
				"marginBalance": value.marginBalance ? value.marginBalance : null,//to be updated in future
				"dayChangeAmt": value.dayChangeAmt ? value.dayChangeAmt : null,//to be updated in future
				"dayChangePct": value.dayChangePct ? value.dayChangePct : null, //to be updated in future
				"accruedInterest": value.accruedInterest ? value.accruedInterest : null //to be updated in future
			});
		});
		returnData.clientBalance.records = response;

		return returnData;

	} else if (resultArray && resultArray.length === 0) {
		let errorMsg = {
			code: 60002,
			message: "No content found in database",
			fields: []
		};
		throw new NoContentError(global.httpStatusCodes.NO_CONTENT, global.httpStatusCodes["204_MESSAGE"], errorMsg);
	}

};

export {retrieveClientBalanceService};
