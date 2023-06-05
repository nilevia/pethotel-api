export const __esModule: boolean;
export namespace Prisma {
    namespace AdminScalarFieldEnum {
        const id: string;
        const email: string;
        const password: string;
        const salt: string;
        const created_at: string;
        const updated_at: string;
    }
    namespace AnimalScalarFieldEnum {
        const id_1: string;
        export { id_1 as id };
        export const order_id: string;
        export const kind: string;
        export const name: string;
        export const age: string;
        export const color: string;
        const created_at_1: string;
        export { created_at_1 as created_at };
        const updated_at_1: string;
        export { updated_at_1 as updated_at };
    }
    namespace AuthenticationScalarFieldEnum {
        const id_2: string;
        export { id_2 as id };
        export const ref_id: string;
        export const ref_table: string;
        export const token: string;
        const created_at_2: string;
        export { created_at_2 as created_at };
        const updated_at_2: string;
        export { updated_at_2 as updated_at };
    }
    namespace CityScalarFieldEnum {
        const id_3: string;
        export { id_3 as id };
        const name_1: string;
        export { name_1 as name };
        export const status: string;
        const created_at_3: string;
        export { created_at_3 as created_at };
        const updated_at_3: string;
        export { updated_at_3 as updated_at };
    }
    namespace HotelScalarFieldEnum {
        const id_4: string;
        export { id_4 as id };
        export const vendor_id: string;
        const name_2: string;
        export { name_2 as name };
        export const image: string;
        export const city: string;
        export const district: string;
        export const phone: string;
        export const description: string;
        export const rating: string;
        export const rating_count: string;
        export const price: string;
        const status_1: string;
        export { status_1 as status };
        export const address: string;
        export const lat: string;
        export const lon: string;
        const created_at_4: string;
        export { created_at_4 as created_at };
        const updated_at_4: string;
        export { updated_at_4 as updated_at };
    }
    namespace Hotel_imagesScalarFieldEnum {
        const id_5: string;
        export { id_5 as id };
        export const hotel_id: string;
        const image_1: string;
        export { image_1 as image };
        const created_at_5: string;
        export { created_at_5 as created_at };
        const updated_at_5: string;
        export { updated_at_5 as updated_at };
    }
    namespace ImageScalarFieldEnum {
        const id_6: string;
        export { id_6 as id };
        const image_2: string;
        export { image_2 as image };
        const ref_id_1: string;
        export { ref_id_1 as ref_id };
        const ref_table_1: string;
        export { ref_table_1 as ref_table };
        export const ref_column: string;
        const created_at_6: string;
        export { created_at_6 as created_at };
        const updated_at_6: string;
        export { updated_at_6 as updated_at };
    }
    namespace OrderScalarFieldEnum {
        const id_7: string;
        export { id_7 as id };
        const hotel_id_1: string;
        export { hotel_id_1 as hotel_id };
        export const room_id: string;
        export const user_id: string;
        const vendor_id_1: string;
        export { vendor_id_1 as vendor_id };
        export const start_date: string;
        export const end_date: string;
        const status_2: string;
        export { status_2 as status };
        export const notes: string;
        export const amount: string;
        export const expired_at: string;
        const created_at_7: string;
        export { created_at_7 as created_at };
        const updated_at_7: string;
        export { updated_at_7 as updated_at };
    }
    namespace QueryMode {
        const _default: string;
        export { _default as default };
        export const insensitive: string;
    }
    namespace RoomScalarFieldEnum {
        const id_8: string;
        export { id_8 as id };
        const hotel_id_2: string;
        export { hotel_id_2 as hotel_id };
        const name_3: string;
        export { name_3 as name };
        const image_3: string;
        export { image_3 as image };
        const description_1: string;
        export { description_1 as description };
        export const max_pet: string;
        const price_1: string;
        export { price_1 as price };
        const created_at_8: string;
        export { created_at_8 as created_at };
        const updated_at_8: string;
        export { updated_at_8 as updated_at };
    }
    namespace SortOrder {
        const asc: string;
        const desc: string;
    }
    namespace UserScalarFieldEnum {
        const id_9: string;
        export { id_9 as id };
        const name_4: string;
        export { name_4 as name };
        const email_1: string;
        export { email_1 as email };
        const phone_1: string;
        export { phone_1 as phone };
        const created_at_9: string;
        export { created_at_9 as created_at };
        const updated_at_9: string;
        export { updated_at_9 as updated_at };
    }
    namespace VendorScalarFieldEnum {
        const id_10: string;
        export { id_10 as id };
        const email_2: string;
        export { email_2 as email };
        const password_1: string;
        export { password_1 as password };
        const salt_1: string;
        export { salt_1 as salt };
        export const saldo: string;
        const created_at_10: string;
        export { created_at_10 as created_at };
        const updated_at_10: string;
        export { updated_at_10 as updated_at };
    }
    namespace ModelName {
        export const user: string;
        export const vendor: string;
        export const admin: string;
        export const hotel: string;
        export const hotel_images: string;
        export const room: string;
        export const authentication: string;
        const image_4: string;
        export { image_4 as image };
        const city_1: string;
        export { city_1 as city };
        export const order: string;
        export const animal: string;
    }
}
export namespace Prisma {
    export namespace prismaVersion {
        const client: string;
        const engine: string;
    }
    export function PrismaClientKnownRequestError(): never;
    export function PrismaClientUnknownRequestError(): never;
    export function PrismaClientRustPanicError(): never;
    export function PrismaClientInitializationError(): never;
    export function PrismaClientValidationError(): never;
    export function NotFoundError(): never;
    export { Decimal };
    /**
     * Re-export of sql-template-tag
     */
    export function sql(): never;
    export function empty(): never;
    export function join(): never;
    export function raw(): never;
    export function validator(): (val: any) => any;
    export const DbNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export const JsonNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export const AnyNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export namespace NullTypes {
        const DbNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { DbNull_1 as DbNull };
        const JsonNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { JsonNull_1 as JsonNull };
        const AnyNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { AnyNull_1 as AnyNull };
    }
}
/**
 * Create the Client
 */
export class PrismaClient {
}
import { Decimal } from "./runtime/index-browser";
