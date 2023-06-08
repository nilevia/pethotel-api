import prisma from "../prisma";


export type Config = {
    id?: string|null,
    service_fee: number,
}

const DEFAULT_ID = 'DEFAULT_ID';
const DEFAULT_SERVICE_FEE = 10000;

export const GetConfig = async (): Promise<Config> => {
    try {
        let config = await prisma.config.findFirst({
            where: {
                id: DEFAULT_ID,
            }
        })

        if (!config) {
            config = await prisma.config.create({
                data: {
                    id: DEFAULT_ID,
                    service_fee: DEFAULT_SERVICE_FEE,
                }
            })

        }

        return config;
    } catch (error) {
        throw error;
    }
}

type SetConfigParams = {
    values: Config,
}
export const SetConfig = async (params: SetConfigParams): Promise<Config> => {
    try {
        const data: Config = {
            service_fee: params.values.service_fee ?? DEFAULT_SERVICE_FEE,
        }

        const result = await prisma.config.upsert({
            where: {
                id: DEFAULT_ID,
            },
            update: data,
            create: {
                ...data,
                id: DEFAULT_ID,
            },
        })

        return result;
    } catch (error) {
        throw error;
    }
}
