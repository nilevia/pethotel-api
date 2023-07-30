import prisma, {validate} from "../prisma";


export type User = {
    id?: string,
    name: string,
    email: string,
    phone?: string | null,
    created_at?: Date,
    updated_at?: Date,
}

export const getUsers = () => prisma.user.findMany();
export const getUserByEmail = (email: string) => prisma.user.findFirst({
    where: {
        email: email
    }
})

export const getUserById = async (id: string): Promise<User | null> => {
    try {
        if (!validate(id)) return null;

        const result = await prisma.user.findFirst({
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

export const createUser = (values: User) => {
    return prisma.user.create({
        data: values
    });
}

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
