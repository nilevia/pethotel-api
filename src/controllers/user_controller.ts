import {NextFunction, Request, Response} from "express";
import * as Repository from "../repositories/user_repository";
import {RequestWithAuthentication} from "../middlewares";
import {isFloat, isString, Validator} from "../helpers/validator";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";


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


        const user = await Repository.updateUserById(req.authentication?.ref_id as string, values);
        if (!user) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }


        res.status(200).json(user).end();
    } catch (error) {
        next(error);
    }
}

export const getUserProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const vendor = await Repository.getUserById(req.authentication?.ref_id as string);
        return res.status(200).json(vendor).end();
    } catch (error) {
        next(error);
    }
}