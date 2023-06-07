import {NextFunction, Request, Response} from "express";
import * as Repository from "../repositories/user_repository";
import {RequestWithAuthentication} from "../middlewares";
import {isFloat, isString, Validator} from "../helpers/validator";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {ResponseSuccess} from "../exceptions/response";
import Joi from "joi";
import {exclude} from "../prisma";


export const updateUserProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const schema = Joi.object({
            phone: Joi.string().regex(RegExp('^(\\+62)8[1-9][0-9]{6,9}$')).required(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }


        const user = await Repository.updateUserById(req.authentication?.ref_id as string, value);
        if (!user) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Update User Profile Failed"
            });
        }

        exclude(user, ['password', 'salt', 'created_at', 'updated_at']);

        ResponseSuccess(res, {data: user, message: "Update User Profile Success"});
    } catch (error) {
        next(error);
    }
}

export const getUserProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const user = await Repository.getUserById(req.authentication?.ref_id as string);
        exclude(user, ['password', 'salt', 'created_at', 'updated_at']);

        ResponseSuccess(res, {data: user, message: "Get Profile Success"});
    } catch (error) {
        next(error);
    }
}