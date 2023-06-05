export type Admin = {
    id?: string;
    email: string;
    password: string;
    salt: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export declare const getAdmins: () => import("../generated/client").Prisma.PrismaPromise<import("../generated/client").admin[]>;
export declare const getAdminByEmail: (email: string) => Promise<Admin | null>;
export declare const getAdminById: (id: string) => Promise<Admin | null>;
export declare const createAdmin: (values: Admin) => Promise<Admin | null>;
export declare const deleteAdminById: (id: string) => import("../generated/client").Prisma.Prisma__vendorClient<import("../generated/client").vendor, never>;
export declare const updateAdminById: (id: string, values: Admin) => Promise<Admin | null>;
