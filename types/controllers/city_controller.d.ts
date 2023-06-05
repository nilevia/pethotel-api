import { NextFunction, Response } from "express";
import { RequestWithAuthentication } from "../middlewares";
export declare const createCity: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const updateCityById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getListCity: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getCityById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteCityById: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
