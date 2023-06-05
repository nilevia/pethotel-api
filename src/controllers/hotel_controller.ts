import {NextFunction, Response} from "express";
import * as Repository from "../repositories/hotel_repository";
import * as RoomRepository from "../repositories/room_repository";
import {ResponseSuccess} from "../exceptions/response";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {AuthRole, RequestWithAuthentication} from "../middlewares";
import {isBoolean, isFloat, isMobilePhone, isNumber, isString, isUrl, Validator} from "../helpers/validator";
import {validate} from "../prisma";

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
        const {hotel_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }

        const hotel = await Repository.getHotelById({
            id: hotel_id,
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
        const {hotel_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }


        const {errors, values} = await Validator(req, {
            image: isUrl({label: 'Image'}),
            phone: isMobilePhone({label: 'Phone'}),
            description: isString({label: 'Description'}),
            district: isString({label: 'District'}),
            city: isString({label: 'City'}),
            address: isString({label: 'Address'}),
            lat: isFloat({label: 'Latitude'}),
            lon: isFloat({label: 'Longitude'}),
            status: isBoolean({label: 'Status'}),
        });

        if (errors.length > 0) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: errors[0].msg
            });
        }

        let hotel = await Repository.getHotelById({
            id: hotel_id,
        });

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

        hotel = await Repository.updateHotelById({
            id: hotel_id,
            values: hotel,
        });

        if (!hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Update Hotel Failed',
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
        const {hotel_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }

        const rooms = await RoomRepository.getRooms(
            {
                filter: {
                    hotel_id: hotel_id,
                }
            }
        );

        ResponseSuccess(res, {
            message: 'Get Hotel Rooms Success',
            data: rooms
        });
    } catch (error) {
        next(error);
    }
}

export const getRoomByHotelWithById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {hotel_id, room_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }
        if (!room_id || !validate(room_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !room_id ? "Room Id is required" : "Room Id is not valid"
            });
        }

        const room = await RoomRepository.getRoomById(
            {
                id: room_id,
                hotel_id: hotel_id,
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Room Not Found"
            });
        }

        ResponseSuccess(res, {
            message: 'Get Hotel Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

export const updateRoomByHotelWithById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {hotel_id, room_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }
        if (!room_id || !validate(room_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !room_id ? "Room Id is required" : "Room Id is not valid"
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

        let hotel = await Repository.getHotelById({
            id: hotel_id,
        });

        if (!hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }


        let room = await RoomRepository.getRoomById({
            id: room_id,
            hotel_id: hotel_id,
        })

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Room Not Found"
            });
        }

        if (room.name !== values.name) {
            let nameExist = await RoomRepository.getRoomByName({
                name: values.name,
                hotel_id: hotel_id,
            })

            if (nameExist) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: 'Name already exist',
                });
            }
        }

        room = await RoomRepository.updateRoomById(
            {
                hotel_id: hotel_id,
                id: room_id,
                values: values,
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Update Hotel Room Failed',
            });
        }

        ResponseSuccess(res, {
            message: 'Update Hotel Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

export const createRoom = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {hotel_id} = req.params;
        if (!hotel_id || !validate(hotel_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !hotel_id ? "Hotel Id is required" : "Hotel Id is not valid"
            });
        }

        const {errors, values} = await Validator(req, {
            name: isString({label: 'Name'}),
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

        let hotel = await Repository.getHotelById({
            id: hotel_id,
        });

        if (!hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }


        let nameExist = await RoomRepository.getRoomByName({
            name: values.name,
            hotel_id: hotel_id,
        })

        if (nameExist) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Name already exist',
            });
        }


        const room = await RoomRepository.createRoom(
            {
                hotel_id: hotel_id,
                values: values,
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Failed to create room',
            });
        }

        ResponseSuccess(res, {
            message: 'Create Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

