import {NextFunction, Response} from "express";
import * as Repository from "../repositories/order_repository";
import * as VendorRepository from "../repositories/vendor_repository";
import * as RoomRepository from "../repositories/room_repository";
import {ResponseSuccess} from "../exceptions/response";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {AuthenticationRole, RequestWithAuthentication} from "../middlewares";
import {validate} from "../prisma";
import Joi from 'joi';
import moment from "moment";
import {OrderDetail} from "../repositories/order_repository";


export const getOrders = async (req: RequestWithAuthentication, res: Response, next: NextFunction): Promise<void> => {
    try {

        const orders = await Repository.getOrders({});

        const data= orders.map((e)=>{
            return {
                id:e.id,
                date_start : e.start_date,
                date_end : e.end_date,
                hotel:{
                    id: "78a7weqgfqe9767qwehjjkqwe",
                    image : "https://nilevia.com/img/coldplay-og.jpeg",
                    city : "Malang",
                    district: "Lowokwaru",
                    name: "Arumba Pet Hotel"
                },
                room_name: "kamar 50cm 2 hewan",
                initial_price:"500000",
                service_fee: "0",
                total_price:"500000",
                total_pet: 2,
                payment_status : 0,
                order_status : 0
            }
        })

        ResponseSuccess(res, {
            message: 'Get Orders Success',
            data: orders
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
                order_id: order_id
            }
        );

        if (!order) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Order Not Found"
            });
        }

        ResponseSuccess(res, {
            message: 'Get Order Success',
            data: order
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
            status: Joi.number().min(0).max(3).required(),
        });
        const {value, error} = schema.validate(req.body);

        if (error) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: error.message
            });
        }

        let order = await Repository.GetOrderById({
            order_id: order_id,
            animals: true,
            vendor: true,
            order_detail: true,
            user: true,
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

        order.status = value.status;


        order = await Repository.updateOrderById(
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

        const days = a.diff(b, 'days');

        const order_detail: OrderDetail = {
            order_id: '',
            room_id: room_id,
            qty: days,
            price: room.price,
        }

        const amount = order_detail.price * order_detail.qty * value.animals.length;

        const expired_at: Date = moment().add(1, 'days').toDate();

        const order = await Repository.createOrder(
            {
                values: {
                    ...value,
                    user_id: user_id,
                    vendor_id: vendor_id,
                    expired_at: expired_at,
                    amount: amount,
                    order_detail: order_detail,
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

