import {NextFunction, Request, Response} from 'express';
import {get, merge} from 'lodash';


import {getUserBySessionToken} from "../repositories/user_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {getVendorBySessionToken} from "../repositories/vendor_repository";

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const currentUserId: string = get(req, 'identity._id') as string;

        if (!currentUserId) {
            return res.sendStatus(403);
        }

        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }

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
            //  req.headers.authorization.split(' ')[1] ??
            const session_token: string = req.cookies[AUTHENTICATION];

            if (!session_token) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "token not found"
                });
            }

            let authentication;

            if (authRole === AuthRole.USER) {
                authentication = await getUserBySessionToken(session_token);
            }
            if (authRole === AuthRole.VENDOR) {
                authentication = await getVendorBySessionToken(session_token);
            }


            if (!authentication) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "belum login"
                });
            }

            merge(req, {identity: authentication});


            return next();
        } catch (error) {
            next(error)
        }
    }

}

export const isAuthenticatedUser = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthRole.VENDOR)
}

export const isAuthenticatedVendor = async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    await (await isAuthenticated(req, res, next))(AuthRole.VENDOR)
}