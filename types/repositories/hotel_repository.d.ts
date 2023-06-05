import { Vendor } from "./vendor_repository";
import { Room } from "./room_repository";
export type Hotel = {
    id?: string;
    vendor_id?: string | null;
    name: string;
    image?: string | null;
    phone?: string | null;
    images?: Hotel_Images[] | null;
    description?: string | null;
    city?: string | null;
    district?: string | null;
    rating?: number | null;
    rating_count?: number | null;
    price?: number | null;
    address?: string | null;
    status?: boolean | null;
    rooms?: Room[] | null;
    lat?: number | null;
    lon?: number | null;
    vendor?: Vendor | null;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};
export type Hotel_Images = {
    id?: string;
    hotel_id?: string | null;
    image: string | null;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    hotel?: Hotel | null;
};
export type getHotelsParams = {
    filter?: getHotelsParamsFilter;
    include_rooms?: boolean;
    include_images?: boolean;
};
export type getHotelsParamsFilter = {
    search?: string | null | undefined;
    city?: string | null | undefined;
};
export declare const getHotels: (params: getHotelsParams) => Promise<Hotel[]>;
export type getHotelByIdParams = {
    id: string;
    include_rooms?: boolean;
    include_images?: boolean;
    include_vendor?: boolean;
};
export declare const getHotelById: (params: getHotelByIdParams) => Promise<Hotel | null>;
export type updateHotelByIdParams = {
    id: string;
    values: Hotel;
};
export declare const updateHotelById: (params: updateHotelByIdParams) => Promise<Hotel | null>;
