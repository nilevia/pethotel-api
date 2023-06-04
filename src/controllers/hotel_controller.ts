import {NextFunction, Response} from "express";
import * as Repository from "../repositories/hotel_repository";
import * as RoomRepository from "../repositories/room_repository";
import {ResponseSuccess} from "../exceptions/response";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {AuthRole, RequestWithAuthentication} from "../middlewares";
import {isBoolean, isFloat, isMobilePhone, isNumber, isString, isUrl, Validator} from "../helpers/validator";
import {updateRoomById} from "../repositories/room_repository";

export const getHotels = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {search} = req.query;
        const hotels = await Repository.getHotels({
            filter: {
                search: search as string ?? "",
            }
        });

        const data: Repository.Hotel[] = hotels.map((hotel) => {
            let data: any = {
                id: hotel.id,
                name: hotel.name,
                image: hotel.image,
                city: hotel.city,
                district: hotel.district,
                price: hotel.price,
                rating: hotel.rating,
                rating_count: hotel.rating_count,
            };

            if (req.authentication?.ref_table == AuthRole.ADMIN) {
                data.address = hotel.address;
            }
            return data;
        });


        ResponseSuccess(res, {
            message: 'Get List Hotel Success',
            data: data,
        });
    } catch (error) {
        next(error);
    }
}

export const getHotelById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id is required"
            });
        }

        const hotel = await Repository.getHotelById({
            id: id,
            include_rooms: true,
            include_images: true,
            include_vendor: req.authentication?.ref_table == AuthRole.ADMIN
        });

        if (hotel == null) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }

        ResponseSuccess(res, {
            message: 'Get Hotel Success',
            data: hotel
        });
    } catch (error) {
        next(error);
    }
}

export const updateHotelById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        if (!id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id is required"
            });
        }
        const {errors, values} = await Validator(req, {
            // image: isUrl({label: 'Image'}),
            // phone: isMobilePhone({label: 'Phone'}),
            // description: isString({label: 'Description'}),
            // district: isString({label: 'District'}),
            // city: isString({label: 'City'}),
            // address: isString({label: 'Address'}),
            // lat: isFloat({label: 'Latitude'}),
            // lon: isFloat({label: 'Longitude'}),
            status: isBoolean({label: 'Status'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }

        const hotel = await Repository.getHotelById({id: id});

        if (!hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }


        hotel.phone = values.phone ?? hotel.phone;
        hotel.description = values.description ?? hotel.description;
        hotel.address = values.address ?? hotel.address;
        hotel.city = values.city ?? hotel.city;
        hotel.district = values.district ?? hotel.district;
        hotel.lat = values.lat ?? hotel.lat;
        hotel.lon = values.lon ?? hotel.lon;
        hotel.name = values.name ?? hotel.name;
        hotel.price = values.price ?? hotel.price;
        hotel.rating = values.rating ?? hotel.rating;
        hotel.rating_count = values.rating_count ?? hotel.rating_count;
        hotel.image = values.image ?? hotel.image;
        hotel.status = values?.status ?? hotel.status;

        const data = await Repository.updateHotelById({
            id: id,
            values: hotel,
        });

        if (!data) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Failed to update hotel"
            });
        }

        ResponseSuccess(res, {
            message: 'Update Hotel Success',
            data: true,
        });
    } catch (error) {
        next(error);
    }
}

export const getRoomsByHotelId = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id_hotel} = req.params;
        if (!id_hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id Hotel is required"
            });
        }

        const hotels = await RoomRepository.getRooms(
            {
                filter: {
                    id_hotel: id_hotel,
                }
            }
        );

        ResponseSuccess(res, {
            message: 'Get Hotel Rooms Success',
            data: hotels
        });
    } catch (error) {
        next(error);
    }
}

export const getRoomByHotelWithById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id_hotel, id} = req.params;
        if (!id_hotel || !id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id Hotel is required"
            });
        }

        const hotels = await RoomRepository.getRoomById(
            {
                id: id,
                id_hotel: id_hotel,
            }
        );

        ResponseSuccess(res, {
            message: 'Get Hotel Room Success',
            data: hotels
        });
    } catch (error) {
        next(error);
    }
}

export const updateRoomByHotelWithById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id_hotel, id} = req.params;
        if (!id_hotel || !id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id Hotel is required"
            });
        }

        const {errors, values} = await Validator(req, {
            name: isString({label: 'NAme'}),
            image: isUrl({label: 'Image'}),
            description: isString({label: 'Description'}),
            max_pet: isNumber({label: 'Max Pet'}),
            price: isNumber({label: 'Price'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }


        const hotels = await RoomRepository.updateRoomById(
            {
                id_hotel: id_hotel,
                id: id,
                values: values,
            }
        );

        if (!hotels) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Room Not Found"
            });
        }

        ResponseSuccess(res, {
            message: 'Update Hotel Room Success',
            data: hotels
        });
    } catch (error) {
        next(error);
    }
}

export const createRoom = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id_hotel} = req.params;
        if (!id_hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Id Hotel is required"
            });
        }

        const {errors, values} = await Validator(req, {
            name: isString({label: 'NAme'}),
            image: isUrl({label: 'Image'}),
            description: isString({label: 'Description'}),
            max_pet: isNumber({label: 'Max Pet'}),
            price: isNumber({label: 'Price'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }


        const hotels = await RoomRepository.createRoom(
            {
                id_hotel: id_hotel,
                values: values,
            }
        );

        ResponseSuccess(res, {
            message: 'Create Room Success',
            data: hotels
        });
    } catch (error) {
        next(error);
    }
}

