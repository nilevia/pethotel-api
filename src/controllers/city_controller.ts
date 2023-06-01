import {NextFunction, Request, Response} from "express";
import * as Repository from "../repositories/city_repository";
import {RequestWithAuthentication} from "../middlewares";
import {isBoolean, isFloat, isString, Validator} from "../helpers/validator";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {ResponseSuccess} from "../exceptions/response";


export const createCity = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {errors, values} = await Validator(req, {
            id: isString({label: 'Id'}),
            name: isString({label: 'Name'}),
            status: isBoolean({label: 'Status'}),
        });
        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }

        const isExisting = await Repository.getCityById(values.id);
        if (isExisting != null) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Id City sudah digunakan'
            });
        }


        const data = await Repository.createCity(values);
        if (!data) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "City not found"
            });
        }

        ResponseSuccess(res, {data, message: "Create City Success"});
    } catch (error) {
        next(error);
    }
}

export const updateCityById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.params.id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'params id required'
            });
        }

        const city = await Repository.getCityById(req.params.id);
        if (!city) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'City Not Found'
            });
        }


        const {errors, values} = await Validator(req, {
            id: isString({label: 'Id'}),
            name: isString({label: 'Name'}),
            status: isBoolean({label: 'Status'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }

        if(values.id != req.params.id){
            const isExisting = await Repository.getCityById(values.id);
            if (isExisting != null) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: 'Id City sudah digunakan'
                });
            }
        }
        
        const data = await Repository.updateCityById(req.params.id, values);
        if (!data) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "City not found"
            });
        }

        ResponseSuccess(res, {data, message: "Update City Success"});
    } catch (error) {
        next(error);
    }
}

export const getListCity = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const data = await Repository.getListCity();
        ResponseSuccess(res, {data, message: "Get List City Success"});
    } catch (error) {
        next(error);
    }
}

export const getCityById = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const data = await Repository.getCityById(req.params.id);
        ResponseSuccess(res, {data, message: "Get City Success"});
    } catch (error) {
        next(error);
    }
}

export const deleteCityById = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const data = await Repository.deleteCityById(req.params.id);
        ResponseSuccess(res, {data, message: "Get City Success"});
    } catch (error) {
        next(error);
    }
}