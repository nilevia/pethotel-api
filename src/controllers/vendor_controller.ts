import {NextFunction, Request, Response} from "express";
import {RequestWithAuthentication} from "../middlewares";
import * as Repository from "../repositories/vendor_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {isFloat, isMobilePhone, isString, isUrl, Validator} from "../helpers/validator";
import {ResponseSuccess} from "../exceptions/response";

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

        const vendor = await Repository.getVendorById(id, {hotel: true});

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

        const vendor = await Repository.getVendorById(id, {hotel: false});

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
            image: isUrl({label: 'Image'}),
            images: {
                isArray: {
                    errorMessage: 'Images must be an array',
                },
            },
            phone: isMobilePhone({label: 'Phone'}),
            description: isString({label: 'Description'}),
            district: isString({label: 'District'}),
            city: isString({label: 'City'}),
            address: isString({label: 'Address'}),
            lat: isFloat({label: 'Latitude'}),
            lon: isFloat({label: 'Longitude'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }

        const vendor = await Repository.getVendorById(req.authentication?.ref_id as string, {hotel: false});
        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }

        vendor!.hotel = values;


        const data = await Repository.updateVendorById(req.authentication?.ref_id as string, vendor);
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

export const getVendorProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        let data: Repository.Vendor | null = await Repository.getVendorById(req.authentication?.ref_id as string, {hotel: true});

        ResponseSuccess(res, {data, message: "Get Profile Success"});
    } catch (error) {
        next(error);
    }
}

