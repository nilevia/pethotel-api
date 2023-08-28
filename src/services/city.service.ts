import prisma from "../prisma";
import {City} from "../models";

type GetCitiesParams = {}

export const GetCities = async (params: GetCitiesParams): Promise<City[]> => {
    try {
        return await prisma.city.findMany();
    } catch (err) {
        throw err;
    }
}

type GetCityByIdParams = {
    city_id: string
}

export const GetCityById = async (params: GetCityByIdParams): Promise<City | null> => {
    try {
        return await prisma.city.findFirst({
            where: {
                id: params.city_id
            }
        });
    } catch (err) {
        throw err;
    }
}

type CreateCityParams = {
    data: City,
}

export const CreateCity = async (params: CreateCityParams): Promise<City> => {
    try {
        return await prisma.city.create({
            data: params.data
        });
    } catch (err) {
        throw err;
    }
}

type UpdateCityByIdParams = {
    city_id: string,
    data: City,
}

export const UpdateCityById = async (params: UpdateCityByIdParams): Promise<City | null> => {
    try {
        return await prisma.city.update({
            where: {
                id: params.city_id,
            },
            data: {
                name: params.data.name,
                status: params.data.status,
            },
        })
    } catch (err) {
        throw err;
    }
}
