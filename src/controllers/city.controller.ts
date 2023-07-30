import {NextFunction, Response} from "express";
import Joi from "joi";
import * as Service from "../services/";
import {RequestWithAuthentication} from "../middlewares/authentication.middleware";
import {BaseError, BaseErrorArgsName, ResponseSuccess} from "../helpers";

import {City} from "../models";

export const getCities = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data: City[] = await Service.GetCities({});
        ResponseSuccess(res, {data, message: "Get List City Success"});
    } catch (error) {
        next(error);
    }
}

export const getCityById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    const city_id: string = req.params.city_id;
    if (!city_id) {
        throw new BaseError({
            name: BaseErrorArgsName.ValidationError,
            message: 'params id required'
        });
    }
    try {
        const city: City | null = await Service.GetCityById({city_id});
        if (!city) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'City Not Found'
            });
        }
        ResponseSuccess(res, {data: city, message: "Get City Success"});
    } catch (error) {
        next(error);
    }
}

export const createCity = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const schema = Joi.object({
            id: Joi.string().required(),
            name: Joi.string().required(),
            status: Joi.boolean(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        const isExisting = await Service.GetCityById(value.id);
        if (isExisting != null) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Id City sudah digunakan'
            });
        }


        const data = await Service.CreateCity(value);
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
        const city_id: string = req.params.city_id;
        if (!city_id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'params id required'
            });
        }

        const city = await Service.GetCityById({city_id});
        if (!city) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'City Not Found'
            });
        }

        const schema = Joi.object({
            id: Joi.string().required(),
            name: Joi.string().required(),
            status: Joi.boolean(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        if (value.id != req.params.id) {
            const isExisting = await Service.GetCityById(value.id);
            if (isExisting != null) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: 'Id City sudah digunakan'
                });
            }
        }

        const data = await Service.UpdateCityById({city_id, data: value});
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

