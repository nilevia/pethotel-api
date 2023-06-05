import { NextFunction, Request, Response } from "express";
export declare const dirPublic: string;
export declare const dirUploads: string;
export declare const dirPrefixs: string;
export declare const uploadImage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
