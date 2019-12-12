"use strict";

import * as os from "os";

/**
 * Function to check if a variable/array is empty
 * @param data Input Parameter
 * @returns {boolean} true/false
 */
const empty = (data) => {
	if (typeof(data) === "number" || typeof(data) === "boolean") {
		return false;
	}
	if (typeof(data) === "undefined" || data === null) {
		return true;
	}
	if (typeof(data.length) !== "undefined") {
		return data.length === 0;
	}

	let count = 0;
	for (let i in data) {
		if (data.hasOwnProperty(i)) {
			count++;
		}
	}
	return count === 0;
};

/**
 * Check if variable string contains only numbers
 * @param value
 * @returns {boolean}
 */
const stringIsNumber = (value) => {
	let pattern = /^\d+$/;
	return pattern.test(value);
};

/**
 * Regex to check if the given variable is in YYYYMMDD format
 * It works for all leap years starting from 1582
 * @param value
 */
const stringIsDate = (value) => {
	let pattern = new RegExp("^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$");
	return pattern.test(value);
};

/**
 * Function to get ipAddress and Port Number if available in the environment
 * @returns {{ipAddress: string, port: number}}
 */
const getIpAddressAndPort = () => {

	const nInterfaces = os.networkInterfaces();

	let ipAddress = "localhost";

	Object.keys(nInterfaces).map((nInterface) => {
		nInterfaces[nInterface].filter((interfaceDetails) =>
			interfaceDetails.family === "IPv4" && interfaceDetails.internal === false ? ipAddress = interfaceDetails.address : undefined
		);
	});

	return {
		ipAddress,
		port: process.env.PORT ? process.env.PORT : 3906
	};
};

/**
 * Function for decoding base64 value
 * @param value
 * @returns {*}
 */
const base64Decoder = (value) => {
	if (empty(value)) {
		return "";
	}
	return Buffer.from(value, "base64").toString("ascii");
};

/**
 * Function for encoding a variable to base64
 * @param value
 * @returns {*}
 */
const base64Encoder = (value) => {
	if (empty(value)) {
		return "";
	}
	return Buffer.from(value).toString("base64");
};

/**
 * Account Number validation
 *
 */
const isAccountNumber = (accountNumber) => {
	let pattern = new RegExp(/^[A-Za-z0-9]{1,35}$/);
	return pattern.test(accountNumber);
};


export {getIpAddressAndPort, empty, base64Decoder, base64Encoder, stringIsNumber, stringIsDate, isAccountNumber};