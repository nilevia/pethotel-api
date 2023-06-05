import { Response } from "express";
import { BaseError } from "./base_error";
interface IResponseSuccess {
    message: string;
    data: any;
    error?: string;
}
export declare const ResponseSuccess: (res: Response, args: IResponseSuccess) => Response<any, Record<string, any>>;
export declare const ResponseError: (error: Error | BaseError, res: Response) => Response<any, Record<string, any>>;
export {};
