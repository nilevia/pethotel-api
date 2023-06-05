export declare enum HttpCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
interface BaseErrorArgs {
    name: BaseErrorArgsName;
    httpCode?: HttpCode;
    message: string;
}
export declare enum BaseErrorArgsName {
    NotFound = "NotFound",
    Unauthorized = "Unauthorized",
    ValidationError = "Validation Error",
    DatabaseError = "Database Error",
    ServerError = "Server Error"
}
export declare class BaseError extends Error {
    readonly httpCode: HttpCode;
    readonly reason: string;
    constructor(args: BaseErrorArgs);
}
export {};
