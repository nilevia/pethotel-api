import { PrismaClient } from '@prisma/client'
import ObjectID from "bson-objectid";
import * as bson from 'bson';


const prisma: PrismaClient = new PrismaClient()

export const validate = (id: string) => ObjectID.isValid(id);

export const id = () => new bson.ObjectId().toString();

export default prisma