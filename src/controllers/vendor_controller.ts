import {NextFunction, Request, Response} from "express";
import {RequestWithAuthentication} from "../middlewares";
import * as Repository from "../repositories/vendor_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {isFloat, isString, Validator} from "../helpers/validator";

export const getAllVendors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const vendors = await Repository.getVendors();

        res.status(200).json(vendors);
    } catch (error) {
        next(error);
    }
}

export const getVendorsById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new Error('Id is required');
        }

        const vendor = await Repository.getVendorById(id);

        res.status(200).json(vendor);
    } catch (error) {
        next(error);
    }
}


export const deleteVendor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new Error('Id is required');
        }

        const vendor = await Repository.getVendorById(id);

        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Vendor not found',
            })
        }

        const deletedVendor = await Repository.deleteVendorById(id);

        res.status(200).json(deletedVendor);
    } catch (error) {
        next(error);
    }
}

export const updateVendor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // const {id} = req.params;
        //
        // const {username} = req.body;
        //
        // if (!username) {
        //     return res.sendStatus(400);
        // }
        //
        // const vendor = await getVendorById(id);
        //
        // await updateVendorById(id, req.body)
        //
        // return res.status(200).json(req.body).end();
    } catch (error) {
        next(error);
    }
}


export const updateVendorProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {errors, values} = await Validator(req, {
            logo_url: isString({label: 'Logo URL'}),
            phone: isString({label: 'Phone'}),
            description: isString({label: 'Description'}),
            address: isString({label: 'Address'}),
            lat: isFloat({label: 'Latitude'}),
            long: isFloat({label: 'Longitude'}),
            picture_1: isString({label: 'Picture 1'}),
            picture_2: isString({label: 'Picture 2'}),
            picture_3: isString({label: 'Picture 3'}),
            picture_4: isString({label: 'Picture 4'}),
            picture_5: isString({label: 'Picture 5'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }


        const vendor = await Repository.updateVendorById(req.authentication?.ref_id as string, values);
        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }


        res.status(200).json(vendor).end();
    } catch (error) {
        next(error);
    }
}

export const getVendorProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        const vendor: Repository.Vendor | null = await Repository.getVendorById(req.authentication?.ref_id as string);
        return res.status(200).json(vendor).end();
    } catch (error) {
        next(error);
    }
}