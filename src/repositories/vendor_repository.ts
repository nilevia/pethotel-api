import prisma from "../prisma";
import console from "console";
import {Hotel} from "./hotel_repository";

export type Vendor = {
    id?: string,
    email: string,
    password: string,
    salt: string,
    hotel?: Hotel | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export const getVendors = () => prisma.vendor.findMany();
export const getVendorByEmail = async (email: string, {hotel = false}): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            where: {
                email: email
            },
            include: {
                hotel: hotel,
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export const getVendorById = async (id: string, {hotel = false}): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            where: {
                id: id
            },
            include: {
                hotel: hotel,
            }
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


// export const copyWithImages = (data: Vendor) => {
//     if (data?.logo_url != null) data.logo_url = addDomainUrl(data.logo_url);
//     if (data?.picture_1 != null) data.picture_1 = addDomainUrl(data.picture_1);
//     if (data?.picture_2 != null) data.picture_2 = addDomainUrl(data.picture_2);
//     if (data?.picture_3 != null) data.picture_3 = addDomainUrl(data.picture_3);
//     if (data?.picture_4 != null) data.picture_4 = addDomainUrl(data.picture_4);
//     if (data?.picture_5 != null) data.picture_5 = addDomainUrl(data.picture_5);
//
//     return data;
// }

export const createVendor = async (values: Vendor): Promise<Vendor> => {
    const {vendor, hotel} = await prisma.$transaction(async (prisma) => {
        const vendor = await prisma.vendor.create({
            data: {
                email: values!.email!,
                password: values.password,
                salt: values.salt,
            }
        })

        const hotel = await prisma.hotel.create({
            data: {
                id_vendor: vendor.id,
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
                                id_hotel: values.hotel!.id,
                                // NOT: (values.hotel?.images ?? []).map(({id}) => ({id})),
                            },
                            createMany: {
                                data: (values.hotel?.images ?? []).map((image) => ({
                                    id_hotel: values.hotel!.id,
                                    image: image?.image!,
                                })),
                            }

                        },
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


