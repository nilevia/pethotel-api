import { NextFunction, Request, Response } from 'express';
import { Vendor } from "../repositories/vendor_repository";
import { User } from "../repositories/user_repository";
import { Authentication } from "../repositories/authentication_repository";
import { Admin } from "../repositories/admin_repository";
export interface RequestWithAuthentication extends Request {
    authentication?: Authentication | null;
    user?: User | null;
    vendor?: Vendor | null;
    admin?: Admin | null;
}
export declare const AUTHENTICATION: string;
export declare enum AuthRole {
    USER = "user",
    VENDOR = "vendor",
    ADMIN = "admin",
    ALL = "all"
}
export declare const isAuthenticated: (req: RequestWithAuthentication, res: Response, next: NextFunction) => Promise<void>;
