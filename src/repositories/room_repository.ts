import prisma, {validate} from "../prisma";
import {Hotel} from "./hotel_repository";


export type Room = {
    id?: string,
    hotel_id?: string | null,
    name: string,
    image: string,
    description: string,
    max_pet: number,
    price: number,
    hotel?: Hotel | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}


export type getRoomsParams = {
    filter?: getHotelsParamsFilter,
}

export type getHotelsParamsFilter = {
    hotel_id: string,
    search?: string | null | undefined,
}

export const getRooms = async (params: getRoomsParams): Promise<Room[]> => {
    try {
        if (!validate(params.filter!.hotel_id)) return [];

        const result = await prisma.room.findMany({
            where: {
                hotel_id: params.filter?.hotel_id,
                name: {
                    contains: params.filter?.search ?? "",
                },
                description: {
                    contains: params.filter?.search ?? "",
                },
            },
        });

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}


export type getRoomByIdParams = {
    id: string,
    hotel_id: string,
}

export const getRoomById = async (params: getRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.id) || !validate(params.hotel_id)) return null;
        const result = await prisma.room.findFirst({
            where: {
                id: params.id,
                hotel_id: params.hotel_id
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type updateRoomByIdParams = {
    id: string,
    hotel_id: string,
    values: Room,
}

export const updateRoomById = async (params: updateRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.id) || !validate(params.hotel_id)) return null;

        const result = await prisma.room.update({
            where: {
                id: params.id
            },
            data: {
                description: params.values.description,
                name: params.values.name,
                price: params.values.price,
                image: params.values.image,
                max_pet: params.values.max_pet,
            },
        })

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export type createRoomParams = {
    hotel_id: string,
    values: Room,
}

export const createRoom = async (params: createRoomParams): Promise<Room | null> => {
    try {
        if (!validate(params.hotel_id)) return null;

        const result = await prisma.room.create({
            data: {
                hotel_id: params.hotel_id,
                description: params.values.description,
                name: params.values.name,
                price: params.values.price,
                image: params.values.image,
                max_pet: params.values.max_pet,
            },
        })

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}



