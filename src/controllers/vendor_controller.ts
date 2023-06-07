import {NextFunction, Request, Response} from "express";
import {RequestWithAuthentication} from "../middlewares";
import * as Repository from "../repositories/vendor_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {ResponseSuccess} from "../exceptions/response";
import {exclude, validate} from "../prisma";
import Joi from "joi";


export const GetVendors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const vendors = await Repository.GetVendors({});
        ResponseSuccess(res, {data: vendors, message: "Get Vendors Success"});
    } catch (error) {
        next(error);
    }
}

export const GetVendorById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {vendor_id} = req.params;
        if (!vendor_id || !validate(vendor_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !vendor_id ? "Vendor Id is required" : "Vendor Id is not valid"
            });
        }

        const vendor = await Repository.GetVendorById({id: vendor_id, images: true});

        ResponseSuccess(res, {data: vendor, message: "Get Vendor Success"});
    } catch (error) {
        next(error);
    }
}


export const DeleteVendorById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {vendor_id} = req.params;
        if (!vendor_id || !validate(vendor_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !vendor_id ? "Vendor Id is required" : "Vendor Id is not valid"
            });
        }

        const vendor = await Repository.GetVendorById({id: vendor_id});

        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Vendor not found',
            })
        }

        const deleted = await Repository.DeleteVendorById({id: vendor_id});

        ResponseSuccess(res, {data: deleted, message: "Delete Vendor Success"});
    } catch (error) {
        next(error);
    }
}


export const updateVendorProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const schema = Joi.object({
            image: Joi.string().required(),
            images: Joi.array().items(Joi.object({
                id: Joi.string(),
                image: Joi.string().uri().required(),
            })).required(),
            phone: Joi.string().regex(RegExp('^(\\+62)8[1-9][0-9]{6,9}$')).required(),
            description: Joi.string().required(),
            district: Joi.string().required(),
            city: Joi.string().required(),
            address: Joi.string().required(),
            lat: Joi.number().required(),
            lon: Joi.number().required(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        let vendor: Repository.Vendor | null = await Repository.GetVendorById({
            id: req.authentication?.ref_id as string,
        });

        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }

        vendor.phone = value.phone;
        vendor.description = value.description;
        vendor.district = value.district;
        vendor.city = value.city;
        vendor.address = value.address;
        vendor.lat = value.lat;
        vendor.lon = value.lon;
        vendor.images = value.images;
        vendor.image = value.image;


        vendor = await Repository.UpdateVendorById({
            id: req.authentication?.ref_id as string,
            values: vendor
        });
        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Update Profile Failed"
            });
        }

        exclude(vendor, ['password', 'salt', 'created_at', 'updated_at']);

        for (let i = 0; i < (vendor?.images ?? []).length; i++) {
            exclude((vendor?.images ?? [])[i], ['hotel_id', 'created_at', 'updated_at']);
        }

        ResponseSuccess(res, {data: vendor, message: "Update Profile Success"});
    } catch (error) {
        next(error);
    }
}

export const getVendorProfile = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    try {
        let vendor: Repository.Vendor | null = await Repository.GetVendorById({
            id: req.authentication?.ref_id as string,
            images: true,
        });

        exclude(vendor, ['password', 'salt', 'created_at', 'updated_at']);

        for (let i = 0; i < (vendor?.images ?? []).length; i++) {
            exclude((vendor?.images ?? [])[i], ['hotel_id', 'created_at', 'updated_at']);
        }


        ResponseSuccess(res, {data: vendor, message: "Get Vendor Profile Success"});
    } catch (error) {
        next(error);
    }
}

