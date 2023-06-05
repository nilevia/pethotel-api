import { Hotel } from "./hotel_repository";
export type Vendor = {
    id?: string;
    email: string;
    password: string;
    salt: string;
    hotel?: Hotel | null;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export declare const getVendors: () => import("../generated/client").Prisma.PrismaPromise<import("../generated/client").vendor[]>;
export declare const getVendorByEmail: (email: string, { hotel }: {
    hotel?: boolean;
}) => Promise<Vendor | null>;
export declare const getVendorById: (id: string, { hotel }: {
    hotel?: boolean;
}) => Promise<Vendor | null>;
export declare const createVendor: (values: Vendor) => Promise<Vendor>;
export declare const deleteVendorById: (id: string) => import("../generated/client").Prisma.Prisma__vendorClient<import("../generated/client").vendor, never>;
export declare const updateVendorById: (id: string, values: Vendor) => Promise<Vendor | null>;
