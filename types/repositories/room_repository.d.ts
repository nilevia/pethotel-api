import { Hotel } from "./hotel_repository";
export type Room = {
    id?: string;
    hotel_id?: string | null;
    name: string;
    image: string;
    description: string;
    max_pet: number;
    price: number;
    hotel?: Hotel | null;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export type getRoomsParams = {
    filter?: getHotelsParamsFilter;
};
export type getHotelsParamsFilter = {
    hotel_id: string;
    search?: string | null | undefined;
};
export declare const getRooms: (params: getRoomsParams) => Promise<Room[]>;
export type getRoomByIdParams = {
    id: string;
    hotel_id: string;
};
export declare const getRoomById: (params: getRoomByIdParams) => Promise<Room | null>;
export type getRoomByNameParams = {
    name: string;
    hotel_id: string;
};
export declare const getRoomByName: (params: getRoomByNameParams) => Promise<Room | null>;
export type updateRoomByIdParams = {
    id: string;
    hotel_id: string;
    values: Room;
};
export declare const updateRoomById: (params: updateRoomByIdParams) => Promise<Room | null>;
export type createRoomParams = {
    hotel_id: string;
    values: Room;
};
export declare const createRoom: (params: createRoomParams) => Promise<Room | null>;
