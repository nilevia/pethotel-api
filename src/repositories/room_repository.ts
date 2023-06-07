import prisma, {validate} from "../prisma";
import {Vendor} from "./vendor_repository";


export type Room = {
    id?: string,
    vendor_id?: string | null,
    name: string,
    image: string,
    description: string,
    max_pet: number,
    price: number,
    vendor?: Vendor | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}


export type GetRoomsParams = {
    filter?: GetRoomsParamsFilter,
}

export type GetRoomsParamsFilter = {
    vendor_id: string,
    search?: string | null,
}

export const GetRooms = async (params: GetRoomsParams): Promise<Room[]> => {
    try {

        let where: any = {
            name: {
                contains: params.filter?.search ?? "",
            },
            description: {
                contains: params.filter?.search ?? "",
            },
        };

        if (params.filter?.vendor_id !== null) {
            if (!validate(params.filter?.vendor_id ?? '')) return [];
            where = {
                ...where,
                vendor_id: params.filter?.vendor_id ?? '',
            }
        }

        const result = await prisma.room.findMany({
            where: where,
        });

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}


export type GetRoomByIdParams = {
    room_id: string,
}

export const GetRoomById = async (params: GetRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.room_id) || !validate(params.room_id)) return null;
        const result = await prisma.room.findFirst({
            where: {
                id: params.room_id,
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type GetRoomByNameParams = {
    name: string,
    vendor_id: string,
}
export const GetRoomByName = async (params: GetRoomByNameParams): Promise<Room | null> => {
    try {
        if (!validate(params.vendor_id)) return null;
        const result = await prisma.room.findFirst({
            where: {
                vendor_id: params.vendor_id,
                name: {
                    contains: params.name,
                }
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type UpdateRoomByIdParams = {
    room_id: string,
    values: Room,
}

export const UpdateRoomById = async (params: UpdateRoomByIdParams): Promise<Room | null> => {
    try {
        if (!validate(params.room_id) || !validate(params.room_id)) return null;

        const result = await prisma.room.update({
            where: {
                id: params.room_id
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


export type CreateRoomParams = {
    values: Room,
}

export const CreateRoom = async (params: CreateRoomParams): Promise<Room | null> => {
    try {
        if (!validate(params.values?.vendor_id ?? '')) return null;

        const result = await prisma.room.create({
            data: {
                vendor_id: params.values?.vendor_id ?? '',
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



