import { PrismaClient } from './generated/client';
declare const prisma: PrismaClient;
export declare const validate: (id: string) => boolean;
export declare const id: () => string;
export default prisma;
