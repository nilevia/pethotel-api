import { PrismaClient} from "@prisma/client"
import ObjectID from "bson-objectid";


const prisma: PrismaClient = new PrismaClient()

export const validate = (id: string) => ObjectID.isValid(id);

export default prisma