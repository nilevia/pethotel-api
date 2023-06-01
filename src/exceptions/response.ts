import {Response} from "express";
import {BaseError, HttpCode} from "./base_error";


interface IResponseSuccess {
    message: string;
    data: any;
    error?: string,
}

export const ResponseSuccess = (res: Response, args: IResponseSuccess) => {
    return res.status(200).json({
        message: args.message,
        data: args.data,
        error: null,
    })
}

export const ResponseError = (error: Error | BaseError, res: Response) => {
    if (error instanceof BaseError) {
        return res.status(error.httpCode).json({
            error: error.name,
            message: error.message,
            reason: error.stack,
        })
    } else {
        console.error(`[ERROR] ${error.name}\nmessage : ${error.message}\nstack   : ${error.stack}`)
        return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
            error: {
                error: error.name,
                message: error.message,
                reason: error.stack,
            }
        })
    }

}
