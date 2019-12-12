"use strict";// const util = require('util');
/**
 * custom error classes, to allow you to do easier debugging. All of these errors are exposed on the error object.
 * All these errors inherit from the base JS error object.
 *
 */var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.RunTimeError=exports.DataAccessError=exports.ValidationError=exports.NoContentError=exports.AuthenticationError=exports.BaseError=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _wrapNativeSuper2=_interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));var BaseError=/*#__PURE__*/function(_Error){(0,_inherits2["default"])(BaseError,_Error);function BaseError(statusCode,message,errorResponse){var _this;(0,_classCallCheck2["default"])(this,BaseError);_this=(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(BaseError).call(this,message));_this.name=_this.constructor.name;_this.statusCode=statusCode;_this.errorResponse=errorResponse;Error.captureStackTrace((0,_assertThisInitialized2["default"])(_this),_this.constructor);return _this}return BaseError}((0,_wrapNativeSuper2["default"])(Error));exports.BaseError=BaseError;var DataAccessError=/*#__PURE__*/function(_BaseError){(0,_inherits2["default"])(DataAccessError,_BaseError);function DataAccessError(statusCode,message,errorResponse){(0,_classCallCheck2["default"])(this,DataAccessError);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(DataAccessError).call(this,statusCode,message,errorResponse))}return DataAccessError}(BaseError);exports.DataAccessError=DataAccessError;var AuthenticationError=/*#__PURE__*/function(_BaseError2){(0,_inherits2["default"])(AuthenticationError,_BaseError2);function AuthenticationError(statusCode,message,errorResponse){(0,_classCallCheck2["default"])(this,AuthenticationError);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(AuthenticationError).call(this,statusCode,message,errorResponse))}return AuthenticationError}(BaseError);exports.AuthenticationError=AuthenticationError;var ValidationError=/*#__PURE__*/function(_BaseError3){(0,_inherits2["default"])(ValidationError,_BaseError3);function ValidationError(statusCode,message,errorResponse){(0,_classCallCheck2["default"])(this,ValidationError);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(ValidationError).call(this,statusCode,message,errorResponse))}return ValidationError}(BaseError);exports.ValidationError=ValidationError;var NoContentError=/*#__PURE__*/function(_BaseError4){(0,_inherits2["default"])(NoContentError,_BaseError4);function NoContentError(statusCode,message,errorResponse){(0,_classCallCheck2["default"])(this,NoContentError);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(NoContentError).call(this,statusCode,message,errorResponse))}return NoContentError}(BaseError);exports.NoContentError=NoContentError;var RunTimeError=/*#__PURE__*/function(_BaseError5){(0,_inherits2["default"])(RunTimeError,_BaseError5);function RunTimeError(statusCode,message,errorResponse){(0,_classCallCheck2["default"])(this,RunTimeError);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(RunTimeError).call(this,statusCode,message,errorResponse))}return RunTimeError}(BaseError);exports.RunTimeError=RunTimeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFzZUVycm9yIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJlcnJvclJlc3BvbnNlIiwibmFtZSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIkRhdGFBY2Nlc3NFcnJvciIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJWYWxpZGF0aW9uRXJyb3IiLCJOb0NvbnRlbnRFcnJvciIsIlJ1blRpbWVFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQTtBQUVBOzs7O2kzQkFLTUEsQ0FBQUEsUywyRUFDTCxtQkFBWUMsVUFBWixDQUF3QkMsT0FBeEIsQ0FBaUNDLGFBQWpDLENBQWdELDJEQUMvQywyR0FBTUQsT0FBTixHQUNBLE1BQUtFLElBQUwsQ0FBWSxNQUFLQyxXQUFMLENBQWlCRCxJQUE3QixDQUNBLE1BQUtILFVBQUwsQ0FBa0JBLFVBQWxCLENBQ0EsTUFBS0UsYUFBTCxDQUFxQkEsYUFBckIsQ0FDQUcsS0FBSyxDQUFDQyxpQkFBTiwrQ0FBOEIsTUFBS0YsV0FBbkMsRUFMK0MsWUFNL0MsQyxtREFQc0JDLEssa0NBVWxCRSxDQUFBQSxlLHlGQUNMLHlCQUFZUCxVQUFaLENBQXdCQyxPQUF4QixDQUFpQ0MsYUFBakMsQ0FBZ0Qsd0tBQ3pDRixVQUR5QyxDQUM3QkMsT0FENkIsQ0FDcEJDLGFBRG9CLEVBRS9DLEMsd0JBSDRCSCxTLDZDQU14QlMsQ0FBQUEsbUIsK0ZBQ0wsNkJBQVlSLFVBQVosQ0FBd0JDLE9BQXhCLENBQWlDQyxhQUFqQyxDQUFnRCxnTEFDekNGLFVBRHlDLENBQzdCQyxPQUQ2QixDQUNwQkMsYUFEb0IsRUFFL0MsQyw0QkFIZ0NILFMscURBTTVCVSxDQUFBQSxlLDJGQUNMLHlCQUFZVCxVQUFaLENBQXdCQyxPQUF4QixDQUFpQ0MsYUFBakMsQ0FBZ0Qsd0tBQ3pDRixVQUR5QyxDQUM3QkMsT0FENkIsQ0FDcEJDLGFBRG9CLEVBRS9DLEMsd0JBSDRCSCxTLDZDQU14QlcsQ0FBQUEsYywwRkFDTCx3QkFBWVYsVUFBWixDQUF3QkMsT0FBeEIsQ0FBaUNDLGFBQWpDLENBQWdELHNLQUN6Q0YsVUFEeUMsQ0FDN0JDLE9BRDZCLENBQ3BCQyxhQURvQixFQUUvQyxDLHVCQUgyQkgsUywyQ0FLdkJZLENBQUFBLFksd0ZBQ0wsc0JBQVlYLFVBQVosQ0FBd0JDLE9BQXhCLENBQWlDQyxhQUFqQyxDQUFnRCxrS0FDekNGLFVBRHlDLENBQzdCQyxPQUQ2QixDQUNwQkMsYUFEb0IsRUFFL0MsQyxxQkFIeUJILFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG4vKipcclxuICogY3VzdG9tIGVycm9yIGNsYXNzZXMsIHRvIGFsbG93IHlvdSB0byBkbyBlYXNpZXIgZGVidWdnaW5nLiBBbGwgb2YgdGhlc2UgZXJyb3JzIGFyZSBleHBvc2VkIG9uIHRoZSBlcnJvciBvYmplY3QuXHJcbiAqIEFsbCB0aGVzZSBlcnJvcnMgaW5oZXJpdCBmcm9tIHRoZSBiYXNlIEpTIGVycm9yIG9iamVjdC5cclxuICpcclxuICovXHJcbmNsYXNzIEJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcclxuXHRjb25zdHJ1Y3RvcihzdGF0dXNDb2RlLCBtZXNzYWdlLCBlcnJvclJlc3BvbnNlKSB7XHJcblx0XHRzdXBlcihtZXNzYWdlKTtcclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcblx0XHR0aGlzLmVycm9yUmVzcG9uc2UgPSBlcnJvclJlc3BvbnNlO1xyXG5cdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBEYXRhQWNjZXNzRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpIHtcclxuXHRcdHN1cGVyKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQXV0aGVudGljYXRpb25FcnJvciBleHRlbmRzIEJhc2VFcnJvciB7XHJcblx0Y29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgbWVzc2FnZSwgZXJyb3JSZXNwb25zZSkge1xyXG5cdFx0c3VwZXIoc3RhdHVzQ29kZSwgbWVzc2FnZSwgZXJyb3JSZXNwb25zZSk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpIHtcclxuXHRcdHN1cGVyKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgTm9Db250ZW50RXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpIHtcclxuXHRcdHN1cGVyKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5jbGFzcyBSdW5UaW1lRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpIHtcclxuXHRcdHN1cGVyKHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGVycm9yUmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtCYXNlRXJyb3IsIEF1dGhlbnRpY2F0aW9uRXJyb3IsIE5vQ29udGVudEVycm9yLCBWYWxpZGF0aW9uRXJyb3IsIERhdGFBY2Nlc3NFcnJvciwgUnVuVGltZUVycm9yfTsiXX0=