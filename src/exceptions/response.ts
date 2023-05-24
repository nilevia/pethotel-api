import {Response} from "express";
import {BaseError, HttpCode} from "./base_error";


export const ResponseSuccess = (message: string, data: any) => {
    return {
        message: message,
        data: data
    }
}

export const ResponseError = (error: Error | BaseError, res: Response) => {
    if (error instanceof BaseError) {
        return res.status(error.httpCode).json({
            error: {
                name: error.name,
                message: error.message,
                reason: error.reason,
            }
        })
    } else {
        console.error(`[ERROR] ${error.name}\nmessage : ${error.message}\nstack   : ${error.stack}`)
        return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
            error: {
                name: error.name,
                message: error.message,
                reason: error.stack,
            }
        })
    }

}
