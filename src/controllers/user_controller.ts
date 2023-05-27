import {NextFunction, Request, Response} from "express";
import * as Repository from "../repositories/user_repository";
import {RequestWithAuthentication} from "../middlewares";
import {isFloat, isString, Validator} from "../helpers/validator";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {ResponseSuccess} from "../exceptions/response";


export const updateUserProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {errors, values} = await Validator(req, {
            phone: isString({label: 'Phone'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }


        const data = await Repository.updateUserById(req.authentication?.ref_id as string, values);
        if (!data) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }

        ResponseSuccess(res, {data, message: "Update Profile Success"});
    } catch (error) {
        next(error);
    }
}

export const getUserProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const data = await Repository.getUserById(req.authentication?.ref_id as string);
        ResponseSuccess(res, {data, message: "Get Profile Success"});
    } catch (error) {
        next(error);
    }
}