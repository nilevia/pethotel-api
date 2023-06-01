import {NextFunction, Response} from "express";
import * as Repository from "../repositories/static_repository";
import {RequestWithAuthentication} from "../middlewares";
import {ResponseSuccess} from "../exceptions/response";

export const getCitys = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = Repository.getCitys();
        ResponseSuccess(res, {data, message: "Get Citys Success"});
    } catch (error) {
        next(error);
    }
}
