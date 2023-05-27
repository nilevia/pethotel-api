import {NextFunction, Request, Response} from 'express';
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {Vendor} from "../repositories/vendor_repository";
import {User} from "../repositories/user_repository";
import {Authentication, getAuthenticationByToken} from "../repositories/authentication_repository";


export interface RequestWithAuthentication extends Request {
    authentication?: Authentication | null;
    user?: User | null;
    vendor?: Vendor | null;
}


export const AUTHENTICATION: string = 'authentication';

export enum AuthRole {
    USER = 'user',
    VENDOR = 'vendor',
}

export const isAuthenticated = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
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
                message: "token not found"
            });
        }

        req.authentication = await getAuthenticationByToken(token);


        if (!req.authentication) {
            throw new BaseError({
                name: BaseErrorArgsName.Unauthorized,
                message: "token tidak valid"
            });
        }


        return next();
    } catch (error) {
        next(error)
    }

}

// export const isAuthenticated = async (req: RequestWithAuthentication, res: Response, next: NextFunction) => {
//     return async function (authRole?: AuthRole) {
//         try {
//             let token;
//             if (req.headers.authorization !== undefined) {
//                 token = req.headers.authorization.split(' ')[1];
//             } else {
//                 token = req.cookies[AUTHENTICATION];
//             }
//
//
//             if (!token) {
//                 throw new BaseError({
//                     name: BaseErrorArgsName.Unauthorized,
//                     message: "token not found"
//                 });
//             }
//
//             req.authentication = await getAuthenticationByToken(token);
//
//
//             if (!req.authentication) {
//                 throw new BaseError({
//                     name: BaseErrorArgsName.Unauthorized,
//                     message: "token tidak valid"
//                 });
//             }
//
//
//             return next();
//         } catch (error) {
//             next(error)
//         }
//     }
//
// }

// export const isAuthenticatedUser = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
//     await (await isAuthenticated(req, res, next))(AuthRole.USER)
// }
//
// export const isAuthenticatedVendor = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
//     await (await isAuthenticated(req, res, next))(AuthRole.VENDOR)
// }