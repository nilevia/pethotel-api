import {PrismaClient} from '@prisma/client'
import ObjectID from "bson-objectid";
import * as bson from 'bson';


const prisma: PrismaClient = new PrismaClient()

export const validate = (id: string) => ObjectID.isValid(id);

export const id = () => new bson.ObjectId().toString();

export function exclude<T>(type: T | any, keys: string[]): Omit<T, keyof T> {
    for (let key of keys) {
        if (type[key]) {
            delete type[key]
        }
    }
    return type
}

export default prisma