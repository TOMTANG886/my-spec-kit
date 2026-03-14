export declare enum ErrorCode {
    VALIDATION_FAILED = "VALIDATION_FAILED"
}
export interface ApiResponse<T = any> {
    status: number;
    data: T;
    message: string;
}
export declare class Result<T = any> {
    readonly isSuccess: boolean;
    readonly value?: T;
    readonly error?: {
        code: ErrorCode;
        message: string;
    };
    private constructor();
    static ok<U>(value: U): Result<U>;
    static fail(code: ErrorCode, message: string): Result<null>;
}
