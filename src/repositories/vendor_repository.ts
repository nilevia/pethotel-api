import prisma from "../prisma";
import {AuthRole} from "../middlewares";

export type Vendor = {
    id?: string,
    hotel_name: string,
    email: string,
    password: string,
    salt: string,
    logo_url?: string,
    phone?: string,
    description?: string,
    address?: string,
    picture_1?: string,
    picture_2?: string,
    picture_3?: string,
    picture_4?: string,
    picture_5?: string,
    lat?: number,
    long?: number,
    created_at?: Date,
    updated_at?: Date,
}

export const getVendors = () => prisma.vendor.findMany();
export const getVendorByEmail = (email: string) => prisma.vendor.findFirst({
    where: {
        email: email
    }
})

export const getVendorById = (id: string) => prisma.vendor.findFirst({
    where: {
        id: id
    }
})

export const createVendor = (values: Vendor) => {
    return prisma.vendor.create({
        data: values
    });
}


export const deleteVendorById = (id: string) => prisma.vendor.delete({
    where: {
        id: id
    }
});
export const updateVendorById = (id: string, values: Vendor) => {
    return prisma.vendor.update({
        where: {
            id: id,
        },
        data: values,
    })
}

