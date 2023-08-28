import {NextFunction, Response} from "express";
import * as Repository from "../services/order.service";
import * as VendorRepository from "../services/vendor.service";
import * as RoomRepository from "../services/room.service";
import {ResponseSuccess} from "../helpers/response";
import {BaseError, BaseErrorArgsName} from "../helpers/base_error";
import {AuthenticationRole, RequestWithAuthentication} from "../middlewares/authentication.middleware";
import {validate} from "../prisma";
import Joi from 'joi';
import moment from "moment";
import {CreateReport, GetReports, Report} from "../services/report.service";
import {Order} from "../services/order.service";

export const getOrders = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const orders = await Repository.GetOrders({vendor: true});

        const data = orders.map((e) => {
            return {
                id: e.id,
                date_start: e.start_date,
                date_end: e.end_date,
                vendor: {
                    id: e.vendor?.id,
                    image: e.vendor?.image,
                    city: e.vendor?.city,
                    district: e.vendor?.district,
                    name: e.vendor?.name,
                },
                room_name: e.room_name,
                initial_price: e.initial_price,
                service_fee: e.service_fee,
                total_price: e.total_price,
                total_pet: e.total_pet,
                payment_status: e.payment_status,
                order_status: e.order_status,
            }
        })

        ResponseSuccess(res, {
            message: 'Get Orders Success',
            data: data
        });
    } catch (error) {
        next(error);
    }
}

export const getOrderById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {order_id} = req.params;
        if (!order_id || !validate(order_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !order_id ? "Order Id is required" : "Order Id is not valid"
            });
        }


        const order = await Repository.GetOrderById(
            {
                order_id: order_id,
                vendor: true,
            }
        );

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Order Not Found"
            });
        }

        const data: any = {
            id: order.id,
            date_start: order.start_date,
            date_end: order.end_date,
            vendor: {
                id: order.vendor?.id,
                image: order.vendor?.image,
                city: order.vendor?.city,
                district: order.vendor?.district,
                name: order.vendor?.name,
            },
            room_name: order.room_name,
            initial_price: order.initial_price,
            service_fee: order.service_fee,
            total_price: order.total_price,
            total_pet: order.total_pet,
            payment_status: order.payment_status,
            order_status: order.order_status,
        }

        ResponseSuccess(res, {
            message: 'Get Order Success',
            data: data,
        });
    } catch (error) {
        next(error);
    }
}

export const updateOrderById = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (req.authentication?.ref_table !== AuthenticationRole.VENDOR) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Only vendor can update order"
            });
        }

        const {order_id} = req.params;
        if (!order_id || !validate(order_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !order_id ? "Order Id is required" : "Order Id is not valid"
            });
        }

        const vendor_id: string = req.authentication?.ref_id;

        const schema = Joi.object({
            payment_status: Joi.number().min(0).max(3).required(),
            order_status: Joi.number().min(0).max(3).required(),
        });
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        let order = await Repository.GetOrderById({
            order_id: order_id
        });

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Order not found"
            });
        }

        if (order.vendor_id !== vendor_id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not access this order"
            });
        }

        order.order_status = value.order_status;
        order.payment_status = value.payment_status;


        order = await Repository.UpdateOrderById(
            {
                id: order_id,
                values: order,
            }
        );

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Update Order Failed',
            });
        }

        ResponseSuccess(res, {
            message: 'Update Order Success',
            data: order
        });

    } catch (error) {
        next(error);
    }
}

export const createOrder = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (req.authentication?.ref_table !== AuthenticationRole.USER) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Only user can create order"
            });
        }

        const user_id: string = req.authentication?.ref_id;

        const schema = Joi.object({
            vendor_id: Joi.string().required(),
            room_id: Joi.string().required(),
            start_date: Joi.date().required(),
            end_date: Joi.date().required(),
            notes: Joi.string().required(),
            animals: Joi.array().items(Joi.object({
                kind: Joi.string().required(),
                name: Joi.string().required(),
                age: Joi.string().required(),
                color: Joi.string().required(),
            }).required()).required(),
        })
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        const {vendor_id, room_id} = value;

        let hotel = await VendorRepository.GetVendorById({
            id: vendor_id,
        });

        if (!hotel) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Hotel not found"
            });
        }

        let room = await RoomRepository.GetRoomById({
            room_id: room_id,
        })

        if (!room) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Room not found',
            });
        }

        const a = moment([value.end_date.getFullYear(), value.end_date.getMonth(), value.end_date.getDate()]);
        const b = moment([value.start_date.getFullYear(), value.start_date.getMonth(), value.start_date.getDate()]);

        const days: number = a.diff(b, 'days');

        const initial_price: number = value.animals.length / room.max_pet * room.price;

        const service_fee: number = 0;

        const total_price: number = (initial_price * days) + service_fee;

        const expired_at: Date = moment().add(1, 'days').toDate();

        const order = await Repository.CreateOrder(
            {
                values: {
                    ...value,
                    user_id: user_id,
                    vendor_id: vendor_id,
                    room_name: room.name,
                    initial_price: initial_price,
                    total_price: total_price,
                    total_pet: value.animals.length,
                    service_fee: service_fee,
                    expired_at: expired_at,
                },
            }
        );

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Create Order Failed',
            });
        }

        ResponseSuccess(res, {
            message: 'Create Order Success',
            data: order
        });

    } catch (error) {
        next(error);
    }
}

export const createOrderHotelReport = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (req.authentication?.ref_table !== AuthenticationRole.VENDOR) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Only Vendor can create order"
            });
        }

        const vendor_id: string = req.authentication?.ref_id;

        const order_id: string = req.params.order_id;
        if (!order_id || !validate(order_id)) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: !order_id ? "Order Id is required" : "Order Id is not valid"
            });
        }

        const order: Repository.Order | null = await Repository.GetOrderById(
            {
                order_id: order_id
            }
        );

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Order Not Found"
            });
        }

        if (vendor_id !== order.vendor_id) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Vendor not access this order"
            });
        }

        const schema = Joi.object({
            image: Joi.string().required(),
            description: Joi.string().required(),
        })

        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        const report: Report | null = await CreateReport({
            user_id: order.user_id,
            vendor_id: order.vendor_id,
            order_id: order_id,
            image: value.image,
            description: value.description,
        });

        if (!report) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Create Orders Hotel Report Failed',
            });
        }


        ResponseSuccess(res, {
            message: 'Create Orders Hotel Report Success',
            data: report
        });

    } catch (error) {
        next(error);
    }
}

export const getOrderHotelReports = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {

        const reports: Report[] | null = await GetReports({
            order_id: req.params.order_id,
        });

        if (!reports || reports.length === 0) {
            ResponseSuccess(res, {
                message: 'Get Orders Hotel Reports Success',
                data: []
            });
            return;
        }

        let order_id: string | undefined;
        let vendor_id: string | undefined;
        let user_id: string | undefined;

        const newReports: Report[] = reports?.map((e: Report) => {
            order_id = e.order_id;
            vendor_id = e.vendor_id;
            user_id = e.user_id;
            return {
                id: e.id,
                image: e.image,
                description: e.description,
                created_at: e.created_at,
            }
        })


        if (req.authentication?.ref_table === AuthenticationRole.USER) {
            if (user_id !== req.authentication?.ref_id) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: "User not access this order"
                });
            }
        }

        if (req.authentication?.ref_table === AuthenticationRole.VENDOR) {
            if (vendor_id !== req.authentication?.ref_id) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: "Vendor not access this order"
                });
            }
        }

        const data = {
            order_id: order_id,
            vendor_id: vendor_id,
            user_id: user_id,
            reports: newReports,
        }


        ResponseSuccess(res, {
            message: 'Get Orders Hotel Reports Success',
            data: data
        });
    } catch (error) {
        next(error);
    }
}

