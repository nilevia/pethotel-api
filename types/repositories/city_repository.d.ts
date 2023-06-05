export type City = {
    id: string;
    name: string;
    status: boolean;
    created_at?: Date;
    updated_at?: Date;
};
export declare const getListCity: () => import("../generated/client").Prisma.PrismaPromise<import("../generated/client").city[]>;
export declare const getCityById: (id: string) => import("../generated/client").Prisma.Prisma__cityClient<import("../generated/client").city, never>;
export declare const createCity: (values: City) => import("../generated/client").Prisma.Prisma__cityClient<import("../generated/client").city, never>;
export declare const deleteCityById: (id: string) => import("../generated/client").Prisma.Prisma__cityClient<import("../generated/client").city, never>;
export declare const updateCityById: (id: string, values: City) => import("../generated/client").Prisma.Prisma__cityClient<import("../generated/client").city, never>;
