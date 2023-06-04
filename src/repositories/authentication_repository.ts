import prisma from "../prisma";


export type Authentication = {
    id?: string,
    ref_id: string,
    ref_table: string,
    token: string,
    created_at?: Date,
    updated_at?: Date,
}

export const getAuthenticationByToken = async (token: string): Promise<Authentication | null> => {
    try {
        const result: Authentication | null = await prisma.authentication.findFirst({
            where: {
                token: token
            }
        })

        if (result === null) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export const deleteAuthenticationByToken = async (token: string): Promise<Authentication | null> => {
    try {
        const result: Authentication | null = await prisma.authentication.delete({
            where: {
                token: token
            }
        })

        if (result === null) return null;

        return result;
    } catch (error) {
        throw error;
    }
}

export const createAuthentication = async (values: Authentication): Promise<Authentication | null> => {
    try {
        const result: Authentication | null = await prisma.authentication.create({
            data: values
        })

        if (result === null) return null;

        return result;
    } catch (error) {
        throw error;
    }
}



