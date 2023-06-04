import prisma, {validate} from "../prisma";
import {Hotel} from "./hotel_repository";


export type Room = {
    id?: string,
    id_hotel?: string | null,
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
    id_hotel: string,
    search?: string | null | undefined,
}

export const getRooms = async (params: getRoomsParams): Promise<Room[]> => {
    try {
        if (!validate(params.filter!.id_hotel)) return [];

        const result = await prisma.room.findMany({
            where: {
                id_hotel: params.filter?.id_hotel,
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
    id_hotel: string,
}

export const getRoomById = async (params: getRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.id) || !validate(params.id_hotel)) return null;
        const result = await prisma.room.findFirst({
            where: {
                id: params.id,
                id_hotel: params.id_hotel
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
    id_hotel: string,
    values: Room,
}

export const updateRoomById = async (params: updateRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.id) || !validate(params.id_hotel)) return null;

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
    id_hotel: string,
    values: Room,
}

export const createRoom = async (params: createRoomParams): Promise<Room | null> => {
    try {
        if (!validate(params.id_hotel)) return null;

        const result = await prisma.room.create({
            data: {
                id_hotel: params.id_hotel,
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



