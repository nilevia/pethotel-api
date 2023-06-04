import prisma, {validate} from "../prisma";

export type Admin = {
    id?: string,
    email: string,
    password: string,
    salt: string,
    created_at?: Date | undefined,
    updated_at?: Date | undefined,
}

export const getAdmins = () => prisma.admin.findMany();
export const getAdminByEmail = async (email: string): Promise<Admin | null> => {
    try {
        const result = await prisma.admin.findFirst({
            where: {
                email: email
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export const getAdminById = async (id: string): Promise<Admin | null> => {
    try {
        if(!validate(id)) return null;

        const result = await prisma.admin.findFirst({
            where: {
                id: id
            },
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export const createAdmin = async (values: Admin): Promise<Admin | null> => {
    try {
        const result = await prisma.admin.create({
            data: values,
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


export const deleteAdminById = (id: string) => prisma.vendor.delete({
    where: {
        id: id
    }
});

export const updateAdminById = async (id: string, values: Admin): Promise<Admin | null> => {
    try {

        const result = await prisma.admin.update({
            where: {
                id: id,
            },
            data: values,
        });

        if (!result) return null;

        return result;
    } catch (error) {
        throw error;
    }
}


