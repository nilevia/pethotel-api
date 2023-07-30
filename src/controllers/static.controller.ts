import {NextFunction, Response} from "express";
import * as Repository from "../services/static.service";
import {RequestWithAuthentication} from "../middlewares/authentication.middleware";
import {ResponseSuccess} from "../helpers/response";

export const getCitys = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = Repository.getCitys();
        ResponseSuccess(res, {data, message: "Get Citys Success"});
    } catch (error) {
        next(error);
    }
}
