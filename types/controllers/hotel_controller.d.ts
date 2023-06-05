import { NextFunction, Response } from "express";
import { RequestWithAuthentication } from "../middlewares";
export declare const getHotels: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getHotelById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const updateHotelById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomsByHotelId: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getRoomByHotelWithById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const updateRoomByHotelWithById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const createRoom: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
