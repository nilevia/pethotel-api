import prisma, {validate} from "../prisma";
import {Vendor} from "./vendor_repository";
import {Room} from "./room_repository";


export type Hotel = {
    id?: string,
    id_vendor?: string | null,
    name: string,
    image?: string | null,
    phone?: string | null,
    images?: Hotel_Images[] | null,
    description?: string | null,
    city?: string | null,
    district?: string | null,
    rating?: number | null,
    rating_count?: number | null,
    price?: number | null,
    address?: string | null,
    status?: boolean | null,
    rooms?: Room[] | null,
    lat?: number | null,
    lon?: number | null,
    vendor?: Vendor | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export type Hotel_Images = {
    id?: string,
    id_hotel?: string | null,
    image: string | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
    hotel?: Hotel | null,
}


export type getHotelsParams = {
    filter?: getHotelsParamsFilter,
    include_rooms?: boolean,
    include_images?: boolean,
}

export type getHotelsParamsFilter = {
    search?: string | null | undefined,
    city?: string | null | undefined,
}

export const getHotels = async (params: getHotelsParams): Promise<Hotel[]> => {
    try {
        let where: any = {
            name: {
                contains: params.filter?.search || "",
            },
            city: {
                contains: params.filter?.search || "",
            },
            district: {
                contains: params.filter?.search || "",
            },
        }

        if (params.filter?.city) where.city = {
            ...where.city,
            equals: params.filter?.city
        }

        const result = await prisma.hotel.findMany({
            where,
            include: {
                rooms: params.include_rooms ?? false,
                images: params.include_images ?? false,
            },
        });

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}


export type getHotelByIdParams = {
    id: string,
    include_rooms?: boolean,
    include_images?: boolean,
    include_vendor?: boolean,
}

export const getHotelById = async (params: getHotelByIdParams): Promise<Hotel | null> => {
    try {
        if (!validate(params.id)) return null;
        const result = await prisma.hotel.findFirst({
            where: {
                id: params.id
            },
            include: {
                rooms: params.include_rooms ?? false,
                images: params.include_images ?? false,
                vendor: params.include_vendor ?? false,
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export type updateHotelByIdParams = {
    id: string,
    values: Hotel,
}

export const updateHotelById = async (params: updateHotelByIdParams): Promise<Hotel | null> => {
    try {
        if (!validate(params.id)) return null;

        const result = await prisma.hotel.update({
            where: {
                id: params.id
            },
            data: {
                phone: params.values.phone,
                description: params.values.description,
                address: params.values.address,
                city: params.values.city,
                district: params.values.district,
                lat: params.values.lat,
                lon: params.values.lon,
                name: params.values.name,
                price: params.values.price,
                rating: params.values.rating,
                rating_count: params.values.rating_count,
                image: params.values.image,
                status: params.values!.status!,
            },
        })

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}



