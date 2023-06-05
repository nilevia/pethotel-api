import { NextFunction, Request, Response } from "express";
export declare const getAdmins: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAdminById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
