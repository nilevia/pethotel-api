import { Room } from "./room_repository";
export type Order = {
    id?: string;
    hotel_id: string;
    room_id: string;
    user_id: string;
    vendor_id: string;
    start_date: Date;
    end_date: Date;
    status: number;
    amount: number;
    notes: string;
    room?: Room | null | undefined;
    animals?: Animal[];
    expired_at: Date;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export type Animal = {
    id?: string;
    order_id?: string | null;
    kind: string;
    name: string;
    age: string;
    color: string;
    order?: Order | null;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export type getOrdersParams = {
    filter?: getOrdersParamsFilter;
};
export type getOrdersParamsFilter = {
    search?: string | null | undefined;
    hotel_id?: string;
    room_id?: string;
    user_id?: string;
    vendor_id?: string;
    start_date?: Date;
    end_date?: Date;
    status?: string[];
};
export declare const getOrders: (params: getOrdersParams) => Promise<Order[]>;
export type getOrderByIdParams = {
    order_id: string;
};
export declare const getOrderById: (params: getOrderByIdParams) => Promise<Order | null>;
export type updateOrderByIdParams = {
    id: string;
    values: Order;
};
export declare const updateOrderById: (params: updateOrderByIdParams) => Promise<Order | null>;
export type createOrderParams = {
    values: Order;
};
export declare const createOrder: (params: createOrderParams) => Promise<Order | null>;
