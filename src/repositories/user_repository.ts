import prisma from "../prisma";
import {AuthRole} from "../middlewares";


export type User = {
    id?: string,
    name: string,
    email: string,
    created_at?: Date,
    updated_at?: Date,
}

export const getUsers = () => prisma.user.findMany();
export const getUserByEmail = (email: string) => prisma.user.findFirst({
    where: {
        email: email
    }
})

export const getUserById = (id: string) => prisma.user.findFirst({
    where: {
        id: id
    }
})

export const createUser = (values: User) => {
    return prisma.user.create({
        data: values
    });
}

export const getUserBySessionToken = (session_token: string) => prisma.authentication.findFirst({
    where: {
        session_token: session_token,
        ref_table: AuthRole.USER,
    }
})

export const deleteUserById = (id: string) => prisma.user.delete({
    where: {
        id: id
    }
});
export const updateUserById = (id: string, values: User) => {
    return prisma.user.update({
        where: {
            id: id,
        },
        data: values,
    })
}
