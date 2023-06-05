import { NextFunction, Response } from "express";
import { RequestWithAuthentication } from "../middlewares";
export declare const updateUserProfile: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
export declare const getUserProfile: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
