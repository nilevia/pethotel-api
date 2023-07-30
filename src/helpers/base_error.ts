export enum HttpCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}


interface BaseErrorArgs {
    name: BaseErrorArgsName;
    httpCode?: HttpCode;
    message: string;
}

export enum BaseErrorArgsName {
    NotFound = 'NotFound',
    Unauthorized = 'Unauthorized',
    ValidationError = 'Validation Error',
    DatabaseError = 'Database Error',
    ServerError = 'Server Error',
}

function getHttpCode(name: BaseErrorArgsName): HttpCode {
    if (name == BaseErrorArgsName.NotFound) return HttpCode.NOT_FOUND;
    if (name == BaseErrorArgsName.Unauthorized) return HttpCode.UNAUTHORIZED;
    if (name == BaseErrorArgsName.ValidationError) return HttpCode.BAD_REQUEST;
    if (name == BaseErrorArgsName.DatabaseError) return HttpCode.INTERNAL_SERVER_ERROR;
    if (name == BaseErrorArgsName.ServerError) return HttpCode.INTERNAL_SERVER_ERROR;
    return HttpCode.INTERNAL_SERVER_ERROR;

}


export class BaseError extends Error {
    public readonly httpCode: HttpCode;
    public readonly reason: string;

    constructor(args: BaseErrorArgs) {
        super(args.message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = `${args.name}`;
        this.httpCode = args.httpCode != null ? args.httpCode : getHttpCode(args.name);
        this.reason = `${args.name} ${args.message}`;

        Error.captureStackTrace(this);
    }
}

// type ErrorName = 'ValidationError' | 'DatabaseError';
//
// export class ErrorBase<T extends string> extends Error {
//     name: T;
//     message: string;
//     cause: any;
//
//     constructor({name, message, cause}: { name: T; message: string; cause: any; }) {
//         super();
//         this.name = name;
//         this.message = message;
//         this.cause = cause;
//     }
//
// }
//
// export class BaseError extends ErrorBase<ErrorName> {}