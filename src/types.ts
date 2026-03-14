export enum ErrorCode {
    VALIDATION_FAILED = 'VALIDATION_FAILED',
}

export interface ApiResponse<T = any> {
    status: number;
    data: T;
    message: string;
}

export class Result<T = any> {
    public readonly isSuccess: boolean;
    public readonly value?: T;
    public readonly error?: { code: ErrorCode; message: string };

    private constructor(isSuccess: boolean, value?: T, error?: { code: ErrorCode; message: string }) {
        this.isSuccess = isSuccess;
        this.value = value;
        this.error = error;
    }

    static ok<U>(value: U): Result<U> {
        return new Result<U>(true, value);
    }

    static fail(code: ErrorCode, message: string): Result<null> {
        return new Result<null>(false, undefined, { code, message });
    }
}
