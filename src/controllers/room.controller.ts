import {NextFunction, Response} from "express";
import {RequestWithAuthentication} from "../middlewares/authentication.middleware";
import * as VendorRepository from "../services/vendor.service";
import * as RoomRepository from "../services/room.service";
import {BaseError, BaseErrorArgsName} from "../helpers/base_error";
import {ResponseSuccess} from "../helpers/response";
import {exclude, validate} from "../prisma";
import Joi from "joi";

export const getRooms = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {

        const rooms = await RoomRepository.GetRooms(
            {
                filter: {
                    search: req.query.search as string ?? "",
                    vendor_id: req.query.vendor_id as string ?? null,
                }
            }
        );

        for (let i = 0; i < rooms.length; i++) {
            exclude(rooms[i], ['vendor_id', 'created_at', 'updated_at']);
        }

        ResponseSuccess(res, {
            message: 'Get Rooms Success',
            data: rooms
        });
    } catch (error) {
        next(error);
    }
}

export const getRoomById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {room_id} = req.params;
        if (!room_id || !validate(room_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !room_id ? "Room Id is required" : "Room Id is not valid"
            });
        }

        const room = await RoomRepository.GetRoomById(
            {
                room_id: room_id,
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Room Not Found"
            });
        }

        exclude(room, ['vendor_id', 'created_at', 'updated_at']);

        ResponseSuccess(res, {
            message: 'Get Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

export const updateRoomById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {room_id} = req.params;
        if (!room_id || !validate(room_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !room_id ? "Room Id is required" : "Room Id is not valid"
            });
        }

        const vendor_id: string = req!.vendor!.id!;

        const schema = Joi.object({
            image: Joi.string().uri().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            max_pet: Joi.number().required(),
            price: Joi.number().required(),
        })

        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }


        let vendor = await VendorRepository.GetVendorById({
            id: vendor_id,
        });

        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }


        let room = await RoomRepository.GetRoomById({
            room_id: room_id,
        })

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Room Not Found"
            });
        }

        if (room.name !== value.name) {
            let nameExist = await RoomRepository.GetRoomByName({
                name: value.name,
                vendor_id: vendor_id,
            })

            if (nameExist) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: 'Name already exist',
                });
            }
        }

        room = await RoomRepository.UpdateRoomById(
            {
                room_id: room_id,
                values: {
                    ...value,
                    vendor_id: vendor_id,
                },
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Update Room Failed',
            });
        }

        exclude(room, ['vendor_id', 'created_at', 'updated_at']);

        ResponseSuccess(res, {
            message: 'Update Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

export const createRoom = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const vendor_id: string = req!.vendor!.id!;

        const schema = Joi.object({
            image: Joi.string().uri().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            max_pet: Joi.number().required(),
            price: Joi.number().required(),
        })

        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }


        let vendor = await VendorRepository.GetVendorById({
            id: vendor_id,
        });

        if (!vendor) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not found"
            });
        }


        let nameExist = await RoomRepository.GetRoomByName({
            name: value.name,
            vendor_id: vendor_id,
        })

        if (nameExist) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Name already exist',
            });
        }


        const room = await RoomRepository.CreateRoom(
            {
                values: {
                    ...value,
                    vendor_id: vendor_id,
                },
            }
        );

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Failed to create room',
            });
        }

        exclude(room, ['vendor_id', 'created_at', 'updated_at']);

        ResponseSuccess(res, {
            message: 'Create Room Success',
            data: room
        });
    } catch (error) {
        next(error);
    }
}

