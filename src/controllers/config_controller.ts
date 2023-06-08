import {NextFunction, Request, Response} from "express";
import * as Repository from "../repositories/config_repository";
import {RequestWithAuthentication} from "../middlewares";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {ResponseSuccess} from "../exceptions/response";
import Joi from "joi";
import {exclude} from "../prisma";


export const setConfig = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const schema = Joi.object({
            service_fee: Joi.number().required(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }


        const config = await Repository.SetConfig({values: value});
        if (!config) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Update Config Failed"
            });
        }

        exclude(config, ['id', 'created_at', 'updated_at']);

        ResponseSuccess(res, {data: config, message: "Update Config Success"});
    } catch (error) {
        next(error);
    }
}

export const getConfig = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const config = await Repository.GetConfig();
        exclude(config, ['id', 'created_at', 'updated_at']);
        ResponseSuccess(res, {data: config, message: "Get Config Success"});
    } catch (error) {
        next(error);
    }
}
