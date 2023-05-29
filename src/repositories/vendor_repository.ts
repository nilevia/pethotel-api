import prisma from "../prisma";
import {addDomainUrl, removeDomainUrl} from "../helpers";

export type Vendor = {
    id?: string,
    hotel_name: string,
    email: string,
    password: string,
    salt: string,
    logo_url?: string | null,
    phone?: string | null,
    description?: string | null,
    address?: string | null,
    picture_1?: string | null,
    picture_2?: string | null,
    picture_3?: string | null,
    picture_4?: string | null,
    picture_5?: string | null,
    lat?: number | null,
    long?: number | null,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export const getVendors = () => prisma.vendor.findMany();
export const getVendorByEmail = async (email: string): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            where: {
                email: email
            }
        })

        if (!result) return null;

        return copyWithImages({
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        });
    } catch (error) {
        throw error;
    }
}

export const getVendorById = async (id: string): Promise<Vendor | null> => {
    try {
        const result = await prisma.vendor.findFirst({
            where: {
                id: id
            }
        })

        if (!result) return null;

        return copyWithImages({
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        });
    } catch (error) {
        throw error;
    }
}

export const copyWithImages = (data: Vendor) => {
    if (data?.logo_url != null) data.logo_url = addDomainUrl(data.logo_url);
    if (data?.picture_1 != null) data.picture_1 = addDomainUrl(data.picture_1);
    if (data?.picture_2 != null) data.picture_2 = addDomainUrl(data.picture_2);
    if (data?.picture_3 != null) data.picture_3 = addDomainUrl(data.picture_3);
    if (data?.picture_4 != null) data.picture_4 = addDomainUrl(data.picture_4);
    if (data?.picture_5 != null) data.picture_5 = addDomainUrl(data.picture_5);

    return data;
}

export const createVendor = (values: Vendor) => {
    return prisma.vendor.create({
        data: {
            email: values!.email!,
            hotel_name: values.hotel_name,
            password: values.password,
            salt: values.salt,
        }
    });
}


export const deleteVendorById = (id: string) => prisma.vendor.delete({
    where: {
        id: id
    }
});

export const updateVendorById = async (id: string, values: Vendor): Promise<Vendor | null> => {
    try {
        if (values?.logo_url != null) values.logo_url = removeDomainUrl(values.logo_url);
        if (values?.picture_1 != null) values.picture_1 = removeDomainUrl(values.picture_1);
        if (values?.picture_2 != null) values.picture_2 = removeDomainUrl(values.picture_2);
        if (values?.picture_3 != null) values.picture_3 = removeDomainUrl(values.picture_3);
        if (values?.picture_4 != null) values.picture_4 = removeDomainUrl(values.picture_4);
        if (values?.picture_5 != null) values.picture_5 = removeDomainUrl(values.picture_5);

        const result = await prisma.vendor.update({
            where: {
                id: id,
            },
            data: values,
        });

        if (!result) return null;

        return copyWithImages({
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        });
    } catch (error) {
        throw error;
    }
}


