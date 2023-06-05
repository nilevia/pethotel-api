import { NextFunction, Request, Response } from "express";
import { RequestWithAuthentication } from "../middlewares";
export declare const getAllVendors: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getVendorsById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteVendor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateVendor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateVendorProfile: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getVendorProfile: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
