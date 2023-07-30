import {NextFunction, Request, Response} from "express";
import * as Repository from "../services/admin.service";
import {BaseError, BaseErrorArgsName} from "../helpers/base_error";
import {ResponseSuccess} from "../helpers/response";


export const getAdmins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const admins = await Repository.getAdmins();

        ResponseSuccess(res, {
            message: 'Get List Admins Success',
            data: admins,
        });
    } catch (error) {
        next(error);
    }
}

export const getAdminById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Id is required',
            })
        }

        const admin = await Repository.getAdminById(id);
        if(!admin) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Admin not found',
            })
        }

        ResponseSuccess(res, {
            message: 'Get Admin Success',
            data: admin,
        });
    } catch (error) {
        next(error);
    }
}


export const deleteAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Id is required',
            })
        }

        const admin = await Repository.getAdminById(id);

        if (!admin) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Admin not found',
            })
        }

        const deletedAdmin = await Repository.deleteAdminById(id);

        ResponseSuccess(res, {
            message: 'Delete Admin Success',
            data: deletedAdmin,
        });
    } catch (error) {
        next(error);
    }
}


