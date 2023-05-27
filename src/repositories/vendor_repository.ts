import prisma from "../prisma";

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

        return {
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        };
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

        return {
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        };
    } catch (error) {
        throw error;
    }
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
        const result = await prisma.vendor.update({
            where: {
                id: id,
            },
            data: values,
        });

        if (!result) return null;

        return {
            ...result,
            email: result!.email,
            hotel_name: result!.hotel_name,
            password: result!.password,
            salt: result!.salt,
        };
    } catch (error) {
        throw error;
    }
}


