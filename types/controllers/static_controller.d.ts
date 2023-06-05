import { NextFunction, Response } from "express";
import { RequestWithAuthentication } from "../middlewares";
export declare const getCitys: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
