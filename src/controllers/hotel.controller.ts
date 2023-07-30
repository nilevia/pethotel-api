import {NextFunction, Response} from "express";
import {AuthenticationRole, RequestWithAuthentication} from "../middlewares/authentication.middleware";
import * as Repository from "../services/vendor.service";
import {BaseError, BaseErrorArgsName} from "../helpers/base_error";
import {ResponseSuccess} from "../helpers/response";
import {exclude, validate} from "../prisma";
import Joi from "joi";

export const getHotels = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {search, city} = req.query;
        const vendors = await Repository.GetVendors({
            filter: {
                search: search as string ?? "",
                city: req.admin ? city as string ?? null : null,
            }
        });

        const data: Repository.Vendor[] = vendors.map((vendor) => {
            let data: any = {
                id: vendor.id,
                name: vendor.name,
                image: vendor.image,
                city: vendor.city,
                district: vendor.district,
                price: vendor.price,
                rating: vendor.rating,
                rating_count: vendor.rating_count,
            };

            if (req.authentication?.ref_table == AuthenticationRole.ADMIN) {
                data.address = vendor.address;
            }
            return data;
        });


        ResponseSuccess(res, {
            message: 'Get List Vendor Success',
            data: data,
        });
    } catch (error) {
        next(error);
    }
}

export const getHotelById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {vendor_id} = req.params;
        if (!vendor_id || !validate(vendor_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !vendor_id ? "Vendor Id is required" : "Vendor Id is not valid"
            });
        }

        const vendor = await Repository.GetVendorById({
            id: vendor_id,
            rooms: true,
            images: true,
        });

        if (vendor == null) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }

        exclude(vendor, ['created_at', 'updated_at']);

        for (let i = 0; i < (vendor.images ?? []).length; i++) {
            exclude((vendor?.images ?? [])[i], ['vendor_id', 'created_at', 'updated_at']);
        }

        ResponseSuccess(res, {
            message: 'Get Hotel Success',
            data: vendor
        });
    } catch (error) {
        next(error);
    }
}

export const updateHotelById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {vendor_id} = req.params;
        if (!vendor_id || !validate(vendor_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !vendor_id ? "Vendor Id is required" : "Vendor Id is not valid"
            });
        }


        const schema = Joi.object({
            image: Joi.string().uri().required(),
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
                message: "Update Vendor Failed"
            });
        }

        exclude(vendor, ['password', 'salt', 'created_at', 'updated_at']);

        for (let i = 0; i < (vendor?.images ?? []).length; i++) {
            exclude((vendor?.images ?? [])[i], ['vendor_id', 'created_at', 'updated_at']);
        }

        ResponseSuccess(res, {data: vendor, message: "Update Hotel Success"});
    } catch (error) {
        next(error);
    }
}
