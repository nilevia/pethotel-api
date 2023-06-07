import prisma, {validate} from "../prisma";
import {Room} from "./room_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";

export type Vendor = {
    id?: string,
    email: string,
    password: string,
    salt: string,
    name: string,
    saldo?: number | null,
    image?: string | null,
    phone?: string | null,
    description?: string | null,
    city?: string | null,
    district?: string | null,
    rating?: number | null,
    rating_count?: number | null,
    price?: number | null,
    address?: string | null,
    status?: boolean | null,
    images?: Vendor_Images[] | null,
    rooms?: Room[] | null,
    lat?: number | null,
    lon?: number | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}
export type Vendor_Images = {
    id?: string,
    hotel_id?: string | null,
    image: string | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
    vendor?: Vendor | null,
}


export type GetVendorsParams = {
    filter?: GetVendorsParamsFilter,
    images?: boolean,
    rooms?: boolean,
}

export type GetVendorsParamsFilter = {
    search?: string | null,
    city?: string | null,
}

export const GetVendors = async (params: GetVendorsParams): Promise<Vendor[]> => {
    try {

        const result = await prisma.vendor.findMany({
            where: {
                name: {
                    contains: params.filter?.search ?? "",
                },
                city: !params.filter?.city ? {} : {
                    equals: params.filter?.city ?? "",
                }
            },
            include: {
                rooms: params.rooms ?? false,
                images: params.images ?? false,
            },
        });

        if (!result) return [];

        return result;
    } catch (error) {
        throw error;
    }
}

type GetVendorByEmailParams = {
    email: string,
    images?: boolean,
    rooms?: boolean,
}
export const GetVendorByEmail = async (params: GetVendorByEmailParams): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            where: {
                email: params.email
            },
            include: {
                images: params.images ?? false,
                rooms: params.rooms ?? false,
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


type GetVendorByIdParams = {
    id: string,
    images?: boolean,
    rooms?: boolean,
}


export const GetVendorById = async (params: GetVendorByIdParams): Promise<Vendor | null> => {
    try {
        if (!validate(params.id)) return null;

        const result = await prisma.vendor.findFirst({
            where: {
                id: params.id
            },
            include: {
                images: params.images ?? false,
                rooms: params.rooms ?? false,
            }
        });

        if (!result) return null;

        return result;
    } catch
        (error) {
        throw error;
    }
}


export const CreateVendor = async (values: Vendor): Promise<Vendor | null> => {
    const vendor = await prisma.vendor.create({
        data: {
            email: values.email,
            password: values.password,
            salt: values!.salt,
            name: values.name,
        }
    });
    if (!vendor) return null;
    return vendor;
}

type DeleteVendorByIdParams = {
    id: string,
}

export const DeleteVendorById = async (params: DeleteVendorByIdParams): Promise<Vendor | null> => {
    const vendor = await prisma.vendor.delete({
        where: {
            id: params.id
        }
    });
    if (!vendor) return null;
    return vendor;
}

type UpdateVendorByIdParams = {
    id: string,
    values: Vendor,
    images?: boolean,
    rooms?: boolean,
}

export const UpdateVendorById = async (params: UpdateVendorByIdParams): Promise<Vendor | null> => {
    try {
        const result = await prisma.$transaction(async (tx) => {
            const vendor = await tx.vendor.update({
                where: {
                    id: params.id,
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
                    status: params.values.status,
                },
                include: {
                    images: params.images ?? false,
                    rooms: params.rooms ?? false,
                }
            });

            const images: Vendor_Images[] = []

            if ((params.values?.images ?? []).length > 0) {

                for (const image of params.values?.images ?? []) {
                    const res = await tx.vendor_images.create({
                        data: {
                            vendor_id: params.id,
                            image: image.image!,
                        }
                    });
                    images.push(res);
                }


            }

            const data = {
                ...vendor,
                images: images,
            }

            return data;
        })

        return result;
    } catch (error) {
        throw error;
    }
}


