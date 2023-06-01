import prisma from "../prisma";


export type City = {
    id: string,
    name: string,
    status: boolean,
    created_at?: Date,
    updated_at?: Date,
}

export const getListCity = () => prisma.city.findMany();

export const getCityById = (id: string) => prisma.city.findFirst({
    where: {
        id: id
    }
})

export const createCity = (values: City) => {
    return prisma.city.create({
        data: values
    });
}

export const deleteCityById = (id: string) => prisma.city.delete({
    where: {
        id: id
    }
});
export const updateCityById = (id: string, values: City) => {
    return prisma.city.update({
        where: {
            id: id,
        },
        data: values,
    })
}
