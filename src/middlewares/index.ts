import {NextFunction, Request, Response} from 'express';
import {get, merge} from 'lodash';
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {getAuthenticationByTokenUser, getAuthenticationByTokenVendor} from "../repositories/authentication_repository";
import {getVendorById} from "../repositories/vendor_repository";
import {getUserById} from "../repositories/user_repository";

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const currentUserId = get(req, 'identity');
        console.log(currentUserId)
        return next();

        // if (!currentUserId) {
        //     return res.sendStatus(403);
        // }
        //
        // if (currentUserId.toString() !== id) {
        //     return res.sendStatus(403);
        // }

        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);

    }
}

export const AUTHENTICATION: string = 'authentication';

export enum AuthRole {
    USER = 'user',
    VENDOR = 'vendor',
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    return async function (authRole: AuthRole) {
        try {
            let session_token;
            if (req.headers.authorization != undefined) {
                session_token = req.headers.authorization.split(' ')[1];
            } else {
                session_token = req.cookies[AUTHENTICATION];
            }


            if (!session_token) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "token not found"
                });
            }

            let authentication;
            let user;
            let vendor;

            if (authRole === AuthRole.USER) {
                authentication = await getAuthenticationByTokenUser(session_token);
                if (authentication != null) {
                    user = await getUserById(authentication.ref_id);
                }
            }
            if (authRole === AuthRole.VENDOR) {
                authentication = await getAuthenticationByTokenVendor(session_token);
                if (authentication != null) {
                    vendor = await getVendorById(authentication.ref_id);
                }
            }


            if (!authentication) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "token tidak valid"
                });
            }

            merge(req, {
                    identity:
                        {
                            authentication,
                            user,
                            vendor,
                        }
                }
            );


            return next();
        } catch (error) {
            next(error)
        }
    }

}

export const isAuthenticatedUser = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthRole.USER)
}

export const isAuthenticatedVendor = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthRole.VENDOR)
}