"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.stubClientBalanceService=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _index=require("../errors/index");var _helper=require("../utils/helper");var _index2=require("../token/index");var _stubData=require("../database/stubs/stubData");/**
 * \"Provides client Balance\"
 * The endpoint provides details on the client Balance for an individual account or a list of account ids
 *
 * authorization String Authorization token that this system will verify.
 * accountId List PWM Account Number
 * startDate String start date in YYYYMMDD
 * endDate String end date in YYYYMMDD
 * correlationId String A tracking id provided by the calling application (optional)
 * returns clientBalanceResponse
 **/var stubClientBalanceService=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(authorization,accountNumber){var errorMsg,_errorMsg,token,validateTokenResponse,_errorMsg2,_errorMsg3,validationErrors,_errorMsg4;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(0,_helper.empty)(authorization)){_context.next=5;break}errorMsg={code:40001,message:global.httpStatusCodes["401_MESSAGE"],fields:[{name:"authorization",value:"Token is empty"}]};throw new _index.AuthenticationError(global.httpStatusCodes.UNAUTHORIZED,global.httpStatusCodes["401_MESSAGE"],errorMsg);case 5:if(!(authorization&&authorization.indexOf("Bearer ")===-1)){_context.next=10;break}_errorMsg={code:40001,message:global.httpStatusCodes["401_MESSAGE"],fields:[{name:"authorization",value:"Token doesn't have a Bearer prefix to it"}]};throw new _index.AuthenticationError(global.httpStatusCodes.UNAUTHORIZED,global.httpStatusCodes["401_MESSAGE"],_errorMsg);case 10:token=authorization.substring(6).trim();_context.next=13;return(0,_index2.validateToken)(token);case 13:validateTokenResponse=_context.sent;if(!(validateTokenResponse.status==="EXPIRED")){_context.next=17;break}_errorMsg2={code:40002,message:global.httpStatusCodes["401_MESSAGE"],fields:[{name:"authorization",value:"Token is expired"}]};throw new _index.AuthenticationError(global.httpStatusCodes.UNAUTHORIZED,global.httpStatusCodes["401_MESSAGE"],_errorMsg2);case 17:if(!validateTokenResponse.error){_context.next=20;break}_errorMsg3={code:40003,message:global.httpStatusCodes["401_MESSAGE"],fields:[{name:"authorization",value:"Token is not valid"}]};throw new _index.AuthenticationError(global.httpStatusCodes.UNAUTHORIZED,global.httpStatusCodes["401_MESSAGE"],_errorMsg3);case 20:/**
	 * Business logic to validate Input variables
	 * accountId should be an array and cannot be empty
	 * startDate and endDate should be a number of format YYYYMMDD
	 */validationErrors=[];//Check for Account Id
if((0,_helper.empty)(accountNumber)){validationErrors.push({name:"accountNumber",value:"accountNumber provided is empty"})}else if(accountNumber.constructor===Array){accountNumber.map(function(val){if(val.constructor!==String){validationErrors.push({name:"accountNumber",value:"".concat(val," should be of type string")})}// if (!stringIsNumber(val)) {
// 	validationErrors.push({name: "accountNumber", value: `${val} is not a valid accountId`});
// }
})}if((0,_helper.empty)(validationErrors)){_context.next=25;break}_errorMsg4={code:40301,message:"Some parameters are missing",fields:validationErrors};throw new _index.ValidationError(global.httpStatusCodes.BAD_REQUEST,"Some parameters are missing",_errorMsg4);case 25:if(!(accountNumber.length===1)){_context.next=29;break}return _context.abrupt("return",_stubData.stubData1);case 29:if(!(accountNumber.length===2)){_context.next=33;break}return _context.abrupt("return",_stubData.stubData2);case 33:return _context.abrupt("return",_stubData.stubData3);case 34:case"end":return _context.stop();}}},_callee)}));return function stubClientBalanceService(_x,_x2){return _ref.apply(this,arguments)}}();exports.stubClientBalanceService=stubClientBalanceService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlL1N0dWJDbGllbnRCYWxhbmNlU2VydmljZS5qcyJdLCJuYW1lcyI6WyJzdHViQ2xpZW50QmFsYW5jZVNlcnZpY2UiLCJhdXRob3JpemF0aW9uIiwiYWNjb3VudE51bWJlciIsImVycm9yTXNnIiwiY29kZSIsIm1lc3NhZ2UiLCJnbG9iYWwiLCJodHRwU3RhdHVzQ29kZXMiLCJmaWVsZHMiLCJuYW1lIiwidmFsdWUiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiVU5BVVRIT1JJWkVEIiwiaW5kZXhPZiIsInRva2VuIiwic3Vic3RyaW5nIiwidHJpbSIsInZhbGlkYXRlVG9rZW5SZXNwb25zZSIsInN0YXR1cyIsImVycm9yIiwidmFsaWRhdGlvbkVycm9ycyIsInB1c2giLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwibWFwIiwidmFsIiwiU3RyaW5nIiwiVmFsaWRhdGlvbkVycm9yIiwiQkFEX1JFUVVFU1QiLCJsZW5ndGgiLCJzdHViRGF0YTEiLCJzdHViRGF0YTIiLCJzdHViRGF0YTMiXSwibWFwcGluZ3MiOiJBQUFBLGEscVdBQ0Esc0NBQ0EsdUNBQ0Esc0NBQ0Esb0RBR0E7Ozs7Ozs7Ozs7SUFXQSxHQUFNQSxDQUFBQSx3QkFBd0IsOEdBQUcsaUJBQU9DLGFBQVAsQ0FBc0JDLGFBQXRCLCtOQUU1QixrQkFBTUQsYUFBTixDQUY0Qix3QkFHM0JFLFFBSDJCLENBR2hCLENBQ2RDLElBQUksQ0FBRSxLQURRLENBRWRDLE9BQU8sQ0FBRUMsTUFBTSxDQUFDQyxlQUFQLENBQXVCLGFBQXZCLENBRkssQ0FHZEMsTUFBTSxDQUFFLENBQUMsQ0FDUkMsSUFBSSxDQUFFLGVBREUsQ0FFUkMsS0FBSyxDQUFFLGdCQUZDLENBQUQsQ0FITSxDQUhnQixNQVd6QixJQUFJQywyQkFBSixDQUF3QkwsTUFBTSxDQUFDQyxlQUFQLENBQXVCSyxZQUEvQyxDQUE2RE4sTUFBTSxDQUFDQyxlQUFQLENBQXVCLGFBQXZCLENBQTdELENBQW9HSixRQUFwRyxD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eUIsQ0FuRkcsMERBb0Z4QkMsbUJBcEZ3QixlQXFGckI1QixhQUFhLENBQUMyQixNQUFkLEdBQXlCLENBckZKLDBEQXNGeEJFLG1CQXRGd0IsMENBd0Z4QkMsbUJBeEZ3Qix3REFBSCxrQkFBeEJoQyxDQUFBQSx3QkFBd0IsOENBQTlCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkVycm9yLCBWYWxpZGF0aW9uRXJyb3J9IGZyb20gXCIuLi9lcnJvcnMvaW5kZXhcIjtcclxuaW1wb3J0IHtlbXB0eSwgc3RyaW5nSXNEYXRlLCBzdHJpbmdJc051bWJlcn0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQge3ZhbGlkYXRlVG9rZW59IGZyb20gXCIuLi90b2tlbi9pbmRleFwiO1xyXG5pbXBvcnQge3N0dWJEYXRhMSwgc3R1YkRhdGEyLCBzdHViRGF0YTN9IGZyb20gXCIuLi9kYXRhYmFzZS9zdHVicy9zdHViRGF0YVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcXFwiUHJvdmlkZXMgY2xpZW50IEJhbGFuY2VcXFwiXHJcbiAqIFRoZSBlbmRwb2ludCBwcm92aWRlcyBkZXRhaWxzIG9uIHRoZSBjbGllbnQgQmFsYW5jZSBmb3IgYW4gaW5kaXZpZHVhbCBhY2NvdW50IG9yIGEgbGlzdCBvZiBhY2NvdW50IGlkc1xyXG4gKlxyXG4gKiBhdXRob3JpemF0aW9uIFN0cmluZyBBdXRob3JpemF0aW9uIHRva2VuIHRoYXQgdGhpcyBzeXN0ZW0gd2lsbCB2ZXJpZnkuXHJcbiAqIGFjY291bnRJZCBMaXN0IFBXTSBBY2NvdW50IE51bWJlclxyXG4gKiBzdGFydERhdGUgU3RyaW5nIHN0YXJ0IGRhdGUgaW4gWVlZWU1NRERcclxuICogZW5kRGF0ZSBTdHJpbmcgZW5kIGRhdGUgaW4gWVlZWU1NRERcclxuICogY29ycmVsYXRpb25JZCBTdHJpbmcgQSB0cmFja2luZyBpZCBwcm92aWRlZCBieSB0aGUgY2FsbGluZyBhcHBsaWNhdGlvbiAob3B0aW9uYWwpXHJcbiAqIHJldHVybnMgY2xpZW50QmFsYW5jZVJlc3BvbnNlXHJcbiAqKi9cclxuY29uc3Qgc3R1YkNsaWVudEJhbGFuY2VTZXJ2aWNlID0gYXN5bmMgKGF1dGhvcml6YXRpb24sIGFjY291bnROdW1iZXIpID0+IHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblxyXG5cdGlmIChlbXB0eShhdXRob3JpemF0aW9uKSkge1xyXG5cdFx0bGV0IGVycm9yTXNnID0ge1xyXG5cdFx0XHRjb2RlOiA0MDAwMSxcclxuXHRcdFx0bWVzc2FnZTogZ2xvYmFsLmh0dHBTdGF0dXNDb2Rlc1tcIjQwMV9NRVNTQUdFXCJdLFxyXG5cdFx0XHRmaWVsZHM6IFt7XHJcblx0XHRcdFx0bmFtZTogXCJhdXRob3JpemF0aW9uXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiVG9rZW4gaXMgZW1wdHlcIlxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHRcdHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKGdsb2JhbC5odHRwU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELCBnbG9iYWwuaHR0cFN0YXR1c0NvZGVzW1wiNDAxX01FU1NBR0VcIl0sIGVycm9yTXNnKTtcclxuXHR9IGVsc2UgaWYgKGF1dGhvcml6YXRpb24gJiYgYXV0aG9yaXphdGlvbi5pbmRleE9mKFwiQmVhcmVyIFwiKSA9PT0gLTEpIHtcclxuXHRcdGxldCBlcnJvck1zZyA9IHtcclxuXHRcdFx0Y29kZTogNDAwMDEsXHJcblx0XHRcdG1lc3NhZ2U6IGdsb2JhbC5odHRwU3RhdHVzQ29kZXNbXCI0MDFfTUVTU0FHRVwiXSxcclxuXHRcdFx0ZmllbGRzOiBbe1xyXG5cdFx0XHRcdG5hbWU6IFwiYXV0aG9yaXphdGlvblwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcIlRva2VuIGRvZXNuJ3QgaGF2ZSBhIEJlYXJlciBwcmVmaXggdG8gaXRcIlxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHRcdHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKGdsb2JhbC5odHRwU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELCBnbG9iYWwuaHR0cFN0YXR1c0NvZGVzW1wiNDAxX01FU1NBR0VcIl0sIGVycm9yTXNnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnN1YnN0cmluZyg2KS50cmltKCk7XHJcblx0XHRsZXQgdmFsaWRhdGVUb2tlblJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVUb2tlbih0b2tlbik7XHJcblxyXG5cdFx0aWYgKHZhbGlkYXRlVG9rZW5SZXNwb25zZS5zdGF0dXMgPT09IFwiRVhQSVJFRFwiKSB7XHJcblx0XHRcdGxldCBlcnJvck1zZyA9IHtcclxuXHRcdFx0XHRjb2RlOiA0MDAwMixcclxuXHRcdFx0XHRtZXNzYWdlOiBnbG9iYWwuaHR0cFN0YXR1c0NvZGVzW1wiNDAxX01FU1NBR0VcIl0sXHJcblx0XHRcdFx0ZmllbGRzOiBbe1xyXG5cdFx0XHRcdFx0bmFtZTogXCJhdXRob3JpemF0aW9uXCIsXHJcblx0XHRcdFx0XHR2YWx1ZTogXCJUb2tlbiBpcyBleHBpcmVkXCJcclxuXHRcdFx0XHR9XVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoZ2xvYmFsLmh0dHBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsIGdsb2JhbC5odHRwU3RhdHVzQ29kZXNbXCI0MDFfTUVTU0FHRVwiXSwgZXJyb3JNc2cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElmIGVycm9yIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgcHJvdmlkZWQgdG9rZW4gaXMgdmFsaWRcclxuXHRcdGlmICh2YWxpZGF0ZVRva2VuUmVzcG9uc2UuZXJyb3IpIHtcclxuXHRcdFx0bGV0IGVycm9yTXNnID0ge1xyXG5cdFx0XHRcdGNvZGU6IDQwMDAzLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IGdsb2JhbC5odHRwU3RhdHVzQ29kZXNbXCI0MDFfTUVTU0FHRVwiXSxcclxuXHRcdFx0XHRmaWVsZHM6IFt7XHJcblx0XHRcdFx0XHRuYW1lOiBcImF1dGhvcml6YXRpb25cIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlRva2VuIGlzIG5vdCB2YWxpZFwiXHJcblx0XHRcdFx0fV1cclxuXHRcdFx0fTtcclxuXHRcdFx0dGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoZ2xvYmFsLmh0dHBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsIGdsb2JhbC5odHRwU3RhdHVzQ29kZXNbXCI0MDFfTUVTU0FHRVwiXSwgZXJyb3JNc2cpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQnVzaW5lc3MgbG9naWMgdG8gdmFsaWRhdGUgSW5wdXQgdmFyaWFibGVzXHJcblx0ICogYWNjb3VudElkIHNob3VsZCBiZSBhbiBhcnJheSBhbmQgY2Fubm90IGJlIGVtcHR5XHJcblx0ICogc3RhcnREYXRlIGFuZCBlbmREYXRlIHNob3VsZCBiZSBhIG51bWJlciBvZiBmb3JtYXQgWVlZWU1NRERcclxuXHQgKi9cclxuXHRsZXQgdmFsaWRhdGlvbkVycm9ycyA9IFtdO1xyXG5cclxuXHQvL0NoZWNrIGZvciBBY2NvdW50IElkXHJcblx0aWYgKGVtcHR5KGFjY291bnROdW1iZXIpKSB7XHJcblx0XHR2YWxpZGF0aW9uRXJyb3JzLnB1c2goe25hbWU6IFwiYWNjb3VudE51bWJlclwiLCB2YWx1ZTogXCJhY2NvdW50TnVtYmVyIHByb3ZpZGVkIGlzIGVtcHR5XCJ9KTtcclxuXHR9IGVsc2UgaWYgKGFjY291bnROdW1iZXIuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcblx0XHRhY2NvdW50TnVtYmVyLm1hcCgodmFsKSA9PiB7XHJcblx0XHRcdGlmICh2YWwuY29uc3RydWN0b3IgIT09IFN0cmluZykge1xyXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvcnMucHVzaCh7bmFtZTogXCJhY2NvdW50TnVtYmVyXCIsIHZhbHVlOiBgJHt2YWx9IHNob3VsZCBiZSBvZiB0eXBlIHN0cmluZ2B9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBpZiAoIXN0cmluZ0lzTnVtYmVyKHZhbCkpIHtcclxuXHRcdFx0Ly8gXHR2YWxpZGF0aW9uRXJyb3JzLnB1c2goe25hbWU6IFwiYWNjb3VudE51bWJlclwiLCB2YWx1ZTogYCR7dmFsfSBpcyBub3QgYSB2YWxpZCBhY2NvdW50SWRgfSk7XHJcblx0XHRcdC8vIH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKCFlbXB0eSh2YWxpZGF0aW9uRXJyb3JzKSkge1xyXG5cdFx0bGV0IGVycm9yTXNnID0ge1xyXG5cdFx0XHRjb2RlOiA0MDMwMSxcclxuXHRcdFx0bWVzc2FnZTogXCJTb21lIHBhcmFtZXRlcnMgYXJlIG1pc3NpbmdcIixcclxuXHRcdFx0ZmllbGRzOiB2YWxpZGF0aW9uRXJyb3JzXHJcblx0XHR9O1xyXG5cdFx0dGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihnbG9iYWwuaHR0cFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULCBcIlNvbWUgcGFyYW1ldGVycyBhcmUgbWlzc2luZ1wiLCBlcnJvck1zZyk7XHJcblx0fVxyXG5cclxuXHRpZiAoYWNjb3VudE51bWJlci5sZW5ndGggPT09IDEpIHtcclxuXHRcdHJldHVybiBzdHViRGF0YTE7XHJcblx0fSBlbHNlIGlmIChhY2NvdW50TnVtYmVyLmxlbmd0aCA9PT0gMikge1xyXG5cdFx0cmV0dXJuIHN0dWJEYXRhMjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHN0dWJEYXRhMztcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge3N0dWJDbGllbnRCYWxhbmNlU2VydmljZX07Il19