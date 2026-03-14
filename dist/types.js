"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["VALIDATION_FAILED"] = "VALIDATION_FAILED";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class Result {
    constructor(isSuccess, value, error) {
        this.isSuccess = isSuccess;
        this.value = value;
        this.error = error;
    }
    static ok(value) {
        return new Result(true, value);
    }
    static fail(code, message) {
        return new Result(false, undefined, { code, message });
    }
}
exports.Result = Result;
