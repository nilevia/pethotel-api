import prisma from "../prisma";
import {Hotel} from "./hotel_repository";
import Prisma from "../prisma";

export type Vendor = {
    id?: string,
    email: string,
    password: string,
    salt: string,
    saldo?: number | null,
    hotel?: Hotel | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export const GetVendors = async (): Promise<Vendor[] | null> => {
    try {
        const result = prisma.vendor.findMany();

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}

type GetVendorByEmailParams = {
    email: string,
    hotel?: boolean,
    hotel_images?: boolean,
}
export const GetVendorByEmail = async (params: GetVendorByEmailParams): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            include: {
                hotel: params.hotel_images ? {
                    include: {
                        images: params.hotel_images ?? false,
                    }
                } : params.hotel ?? false,
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


type GetVendorByIdParams = {
    id: string,
    hotel?: boolean,
    hotel_images?: boolean,
}

export function exclude<T>(type: T | any, keys: string[]): Omit<T, keyof T> {
    for (let key of keys) {
        if (type[key]) {
            delete type[key]
        }
    }
    return type
}

export const GetVendorById = async (params: GetVendorByIdParams): Promise<Vendor | null> => {
    try {

        const result = await prisma.vendor.findFirst({
            where: {
                id: params.id
            },
            include: {
                hotel: params.hotel_images ? {
                    include: {
                        images: params.hotel_images ?? false,
                    }
                } : params.hotel ?? false,
            },
        });

        if (!result) return null;

        return result;
    } catch
        (error) {
        throw error;
    }
}


export const createVendor = async (values: Vendor): Promise<Vendor> => {
    const {vendor, hotel} = await prisma.$transaction(async (prisma) => {
        const vendor = await prisma.vendor.create({
            data: {
                email: values.email,
                password: values.password,
                salt: values!.salt,
            }
        })

        const hotel = await prisma.hotel.create({
            data: {
                vendor_id: vendor.id,
                name: values.hotel!.name!,
            }
        })
        return {vendor, hotel};
    })

    return {
        ...vendor,
        hotel: hotel,
    };
}


export const deleteVendorById = (id: string) => prisma.vendor.delete({
    where: {
        id: id
    }
});

export const updateVendorById = async (id: string, values: Vendor): Promise<Vendor | null> => {
    try {

        const result = await prisma.vendor.update({
            where: {
                id: id,
            },
            data: {
                hotel: {
                    update: {
                        name: values.hotel?.name,
                        image: values.hotel?.image,
                        images: {
                            deleteMany: {
                                hotel_id: values.hotel!.id,
                                // NOT: (values.hotel?.images ?? []).map(({id}) => ({id})),
                            },
                            createMany: {
                                data: (values.hotel?.images ?? []).map((image) => ({
                                    hotel_id: values.hotel!.id,
                                    image: image?.image!,
                                })),
                            }

                        },
                        phone: values.hotel?.phone,
                        description: values.hotel?.description,
                        city: values.hotel?.city,
                        district: values.hotel?.district,
                        rating: values.hotel?.rating,
                        rating_count: values.hotel?.rating_count,
                        address: values.hotel?.address,
                        lat: values.hotel?.lat,
                        lon: values.hotel?.lon,
                    }
                }
            },
            include: {
                hotel: {
                    include: {
                        images: true,
                    }
                }
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


