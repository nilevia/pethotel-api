import {NextFunction, Request, Response} from 'express';
import {BaseError, BaseErrorArgsName} from "../helpers/base_error";
import * as VendorRepository from "../services/vendor.service";
import * as UserRepository from "../services/user.service";
import {Authentication, getAuthenticationByToken} from "../services/authentication.service";
import * as AdminRepository from "../services/admin.service";


export interface RequestWithAuthentication extends Request {
    authentication?: Authentication | null;
    user?: UserRepository.User | null;
    vendor?: VendorRepository.Vendor | null;
    admin?: AdminRepository.Admin | null;
}


export const AUTHENTICATION: string = 'authentication';

export enum AuthenticationRole {
    USER = 'user',
    VENDOR = 'vendor',
    ADMIN = 'admin',
    ALL = 'all',
}

export const isAuthenticated = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
    return async function (role: AuthenticationRole) {
        try {
            let token;
            if (req.headers.authorization !== undefined) {
                token = req.headers.authorization.split(' ')[1];
            } else {
                token = req.cookies[AUTHENTICATION];
            }


            if (!token) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "Token not found"
                });
            }

            req.authentication = await getAuthenticationByToken(token);


            if (!req.authentication) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "Token tidak valid"
                });
            }

            const isAdmin: boolean = req.authentication.ref_table === AuthenticationRole.ADMIN;
            const isAdminRole: boolean = role === AuthenticationRole.ADMIN || role === AuthenticationRole.ALL;
            if (isAdmin && isAdminRole) {
                req.admin = await AdminRepository.getAdminById(req.authentication.ref_id);
                if (!req.admin) {
                    throw new BaseError({
                        name: BaseErrorArgsName.Unauthorized,
                        message: "Admin not found"
                    });
                }
                return next();
            }

            const isUser: boolean = req.authentication.ref_table === AuthenticationRole.USER;
            const isUserRole: boolean = role === AuthenticationRole.USER || role === AuthenticationRole.ALL;
            if (isUser && isUserRole) {
                req.user = await UserRepository.getUserById(req.authentication.ref_id);
                if (!req.user) {
                    throw new BaseError({
                        name: BaseErrorArgsName.Unauthorized,
                        message: "Admin not found"
                    });
                }
                return next();
            }

            const isVendor: boolean = req.authentication.ref_table === AuthenticationRole.VENDOR;
            const isVendorRole: boolean = role === AuthenticationRole.VENDOR || role === AuthenticationRole.ALL;
            if (isVendor && isVendorRole) {
                req.vendor = await VendorRepository.GetVendorById({id: req.authentication.ref_id});
                if (!req.vendor) {
                    throw new BaseError({
                        name: BaseErrorArgsName.Unauthorized,
                        message: "Vendor not found"
                    });
                }
                return next();
            }


            throw new BaseError({
                name: BaseErrorArgsName.Unauthorized,
                message: "Dont Have Permission"
            });
        } catch (error) {
            next(error)
        }
    }
}

export const isAuthenticatedUser = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthenticationRole.USER)
}

export const isAuthenticatedVendor = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthenticationRole.VENDOR)
}

export const isAuthenticatedAdmin = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthenticationRole.ADMIN)
}

export const isAuthenticatedAll = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthenticationRole.ALL)
}