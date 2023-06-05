export type User = {
    id?: string;
    name: string;
    email: string;
    phone?: string;
    created_at?: Date;
    updated_at?: Date;
};
export declare const getUsers: () => import("../generated/client").Prisma.PrismaPromise<import("../generated/client").user[]>;
export declare const getUserByEmail: (email: string) => import("../generated/client").Prisma.Prisma__userClient<import("../generated/client").user, never>;
export declare const getUserById: (id: string) => import("../generated/client").Prisma.Prisma__userClient<import("../generated/client").user, never>;
export declare const createUser: (values: User) => import("../generated/client").Prisma.Prisma__userClient<import("../generated/client").user, never>;
export declare const deleteUserById: (id: string) => import("../generated/client").Prisma.Prisma__userClient<import("../generated/client").user, never>;
export declare const updateUserById: (id: string, values: User) => import("../generated/client").Prisma.Prisma__userClient<import("../generated/client").user, never>;
