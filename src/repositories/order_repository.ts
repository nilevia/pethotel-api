import prisma, {id, validate} from "../prisma";
import {Room} from "./room_repository";


export type Order = {
    id?: string,
    hotel_id: string,
    user_id: string,
    vendor_id: string,
    start_date: Date,
    end_date: Date,
    status: number, // status dari api 0 = belum bayar, 1 diproses, 2 terbayar, 3 expired / batal
    amount: number,
    notes: string,
    order_detail?: OrderDetail | null | undefined,
    animals?: Animal[],
    expired_at: Date,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export type OrderDetail = {
    id?: string,
    order_id: string,
    room_id: string,
    qty: number, // status dari api 0 = belum bayar, 1 diproses, 2 terbayar, 3 expired / batal
    price: number,
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


export type getOrdersParams = {
    filter?: getOrdersParamsFilter,
}

export type getOrdersParamsFilter = {
    search?: string | null | undefined,
    hotel_id?: string,
    room_id?: string,
    user_id?: string,
    vendor_id?: string,
    start_date?: Date,
    end_date?: Date,
    status?: string[],
}

export const getOrders = async (params: getOrdersParams): Promise<Order[]> => {
    try {
        const result = await prisma.order.findMany({});

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}


export type getOrderByIdParams = {
    order_id: string,
    include_user?: boolean,
    include_vendor?: boolean,
    order_detail?: boolean,
    include_hotel?: boolean,
    include_animals?: boolean,
}

export const getOrderById = async (params: getOrderByIdParams): Promise<Order | null> => {
    try {
        if (!validate(params.order_id)) return null;
        const result = await prisma.order.findFirst({
            where: {
                id: params.order_id,
            },
            include: {
                animals: params.include_animals,
                order_detail: params.order_detail,
                hotel: params.include_hotel,
                user: params.include_user,
                vendor: params.include_vendor,
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type updateOrderByIdParams = {
    id: string,
    values: Order,
}

export const updateOrderById = async (params: updateOrderByIdParams): Promise<Order | null> => {
    try {
        if (!validate(params.id)) return null;

        const result = await prisma.order.update({
            where: {
                id: params.id
            },
            data: {
                status: params.values.status,
            },
        })

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export type createOrderParams = {
    values: Order,
}

export const createOrder = async (params: createOrderParams): Promise<Order | null> => {
    try {
        const order_id: string = id();
        const order = await prisma.$transaction(async (prisma) => {
            const order = await prisma.order.create({
                data: {
                    id: order_id,
                    hotel_id: params.values.hotel_id,
                    user_id: params.values.user_id,
                    vendor_id: params.values.vendor_id,
                    start_date: params.values.start_date,
                    end_date: params.values.end_date,
                    status: params.values.status,
                    amount: params.values.amount,
                    notes: params.values.notes,
                    expired_at: params.values.expired_at,
                },
            });

            const order_detail = await prisma.order_detail.create({
                data: {
                    order_id: order.id,
                    room_id: params.values.order_detail!.room_id,
                    qty: params.values.order_detail?.qty ?? 0,
                    price: params.values.order_detail?.price ?? 0,
                },
            });

            const animals: Animal[] = [];
            for (const e of (params.values.animals ?? [])) {
                const animal = await prisma.animal.create({
                    data: {
                        order_id: order.id,
                        kind: e.kind,
                        name: e.name,
                        age: e.age,
                        color: e.color,
                    }
                });

                animals.push(animal);
            }

            const data: Order = {
                ...order,
                animals: animals,
                order_detail: order_detail,
            }

            return data;
        })

        return order;
    } catch (error) {
        throw error;
    }
}



