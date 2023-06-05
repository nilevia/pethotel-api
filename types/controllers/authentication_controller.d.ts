import { NextFunction, Request, Response } from 'express';
export default class AuthenticationController {
    constructor();
    adminLogin(req: Request, res: Response, next: NextFunction): Promise<void>;
    adminRegister(req: Request, res: Response, next: NextFunction): Promise<void>;
    vendorLogin(req: Request, res: Response, next: NextFunction): Promise<void>;
    vendorRegister(req: Request, res: Response, next: NextFunction): Promise<void>;
    refresh(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    onGoogle(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
