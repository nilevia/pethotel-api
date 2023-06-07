import prisma, {id, validate} from "../prisma";
import {Room} from "./room_repository";
import {Vendor, Vendor_Images} from "./vendor_repository";
import {User} from "./user_repository";


export type Order = {
    id?: string,
    user_id: string,
    room_id: string,
    vendor_id: string,
    start_date: Date,
    end_date: Date,
    room_name: string,
    initial_price: number,
    total_price: number,
    total_pet: number,
    service_fee: number,
    payment_status: number,
    order_status: number,
    notes: string,
    animals?: Animal[],
    vendor?: Vendor,
    user?: User,
    room?: Room,
    expired_at: Date,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}


export type Animal = {
    id?: string,
    order_id?: string | null,
    kind: string,
    name: string,
    age: string,
    color: string,
    order?: Order | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}


export type GetOrdersParams = {
    filter?: GetOrdersParamsFilter,
    vendor?: boolean,
    user?: boolean,
    room?: boolean,
    animals?: boolean
}

export type GetOrdersParamsFilter = {
    search?: string | null | undefined,
    hotel_id?: string,
    room_id?: string,
    user_id?: string,
    vendor_id?: string,
    start_date?: Date,
    end_date?: Date,
    status?: string[],
}

export const GetOrders = async (params: GetOrdersParams): Promise<Order[]> => {
    try {
        const result = await prisma.order.findMany({
            include: {
                vendor: params.vendor ?? false,
                user: params.user ?? false,
                room: params.room ?? false,
                animals: params.animals ?? false,
            }
        });

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}


export type GetOrderByIdParams = {
    order_id: string,
    user?: boolean,
    vendor?: boolean,
    room?: boolean,
    animals?: boolean,
}

export const GetOrderById = async (params: GetOrderByIdParams): Promise<Order | null> => {
    try {
        if (!validate(params.order_id)) return null;
        const result = await prisma.order.findFirst({
            where: {
                id: params.order_id,
            },
            include: {
                animals: params.animals ?? false,
                room: params.room ?? false,
                user: params.user ?? false,
                vendor: params.vendor ?? false,
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type UpdateOrderByIdParams = {
    id: string,
    values: Order,
}

export const UpdateOrderById = async (params: UpdateOrderByIdParams): Promise<Order | null> => {
    try {
        if (!validate(params.id)) return null;

        const result = await prisma.order.update({
            where: {
                id: params.id
            },
            data: {
                order_status: params.values.order_status,
                payment_status: params.values.payment_status,
            },
        })

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export type CreateOrderParams = {
    values: Order,
}

export const CreateOrder = async (params: CreateOrderParams): Promise<Order | null> => {
    try {

        const order = await prisma.$transaction(async (tx) => {
            const order = await tx.order.create({
                data: {
                    user_id: params.values.user_id,
                    vendor_id: params.values.vendor_id,
                    room_id: params.values.room_id,
                    start_date: params.values.start_date,
                    end_date: params.values.end_date,
                    initial_price: params.values.initial_price,
                    total_price: params.values.total_price,
                    total_pet: params.values.total_pet,
                    service_fee: params.values.service_fee,
                    payment_status: params.values.payment_status,
                    order_status: params.values.order_status,
                    notes: params.values.notes,
                    expired_at: params.values.expired_at,
                    room_name: params.values.room_name,
                },
            });

            const animals: Animal[] = []

            if ((params.values?.animals ?? []).length > 0) {
                for (const animal of params.values?.animals ?? []) {
                    const res = await tx.animal.create({
                        data: {
                            order_id: order.id,
                            kind: animal.kind,
                            name: animal.name,
                            age: animal.age,
                            color: animal.color,
                        }
                    });
                    animals.push(res);
                }
            }

            const data = {
                ...order,
                animals,
            }

            return data;
        })

        return order;
    } catch (error) {
        throw error;
    }
}



