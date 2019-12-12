"use strict";

// const util = require('util');

/**
 * custom error classes, to allow you to do easier debugging. All of these errors are exposed on the error object.
 * All these errors inherit from the base JS error object.
 *
 */
class BaseError extends Error {
	constructor(statusCode, message, errorResponse) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
		this.errorResponse = errorResponse;
		Error.captureStackTrace(this, this.constructor);
	}
}

class DataAccessError extends BaseError {
	constructor(statusCode, message, errorResponse) {
		super(statusCode, message, errorResponse);
	}
}

class AuthenticationError extends BaseError {
	constructor(statusCode, message, errorResponse) {
		super(statusCode, message, errorResponse);
	}
}

class ValidationError extends BaseError {
	constructor(statusCode, message, errorResponse) {
		super(statusCode, message, errorResponse);
	}
}

class NoContentError extends BaseError {
	constructor(statusCode, message, errorResponse) {
		super(statusCode, message, errorResponse);
	}
}
class RunTimeError extends BaseError {
	constructor(statusCode, message, errorResponse) {
		super(statusCode, message, errorResponse);
	}
}

export {BaseError, AuthenticationError, NoContentError, ValidationError, DataAccessError, RunTimeError};