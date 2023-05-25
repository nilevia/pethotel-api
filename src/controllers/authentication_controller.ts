import {NextFunction, Request, Response} from 'express';
import {authentication, random} from "../helpers";
import {createVendor, getVendorByEmail, getVendorById} from "../repositories/vendor_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import prisma from "../prisma";
import {AUTHENTICATION, AuthRole} from "../middlewares";
import {getAuthenticationByToken} from "../repositories/authentication_repository";
import {getUserByEmail, getUserById} from "../repositories/user_repository";


export const vendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "lengkapi form"
            });
        }

        const vendor = await getVendorByEmail(email);

        if (!vendor) {
            return res.sendStatus(400);
        }

        const expectedHash: string = authentication(vendor.salt, password);

        if (vendor.password != expectedHash) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "Data tidak ditemukan"
            });
        }

        const salt: string = random();
        const session_token: string = authentication(salt, vendor.id);

        const result = await prisma.authentication.create({
            data: {
                session_token,
                ref_id: vendor.id,
                ref_table: AuthRole.VENDOR,
            },
        });


        res.cookie(AUTHENTICATION, session_token, {domain: 'localhost', path: '/'});

        const data = {
            id: result.id,
            session_token: result.session_token,
            vendor,
        }

        return res.status(200).json(data).end();
    } catch (error) {
        next(error)
    }
}

export const vendorRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password, hotel_name} = req.body;


        if (!email || !password || !hotel_name) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "lengkapi form"
            });
        }

        const existing = await getVendorByEmail(email);
        if (existing) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: "email sudah digunakan"
            });
        }

        const salt: string = random();
        const vendor = await createVendor({
            email,
            hotel_name,
            salt,
            password: authentication(salt, password),
        });


        return res.status(200).json(vendor).end();
    } catch (error) {
        next(error)
    }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
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

        let authentication = await getAuthenticationByToken(session_token);

        if (!authentication) {
            throw new BaseError({
                name: BaseErrorArgsName.Unauthorized,
                message: "token not found"
            });
        }


        if (authentication.ref_table === AuthRole.USER) {
            const user = await getUserById(authentication.ref_id);
            if (!user) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "user not found"
                });
            }
            const data = {
                id: authentication.id,
                session_token: authentication.session_token,
                user,
            }
            return res.status(200).json(data)
        }
        if (authentication.ref_table === AuthRole.VENDOR) {
            const vendor = await getVendorById(authentication.ref_id);
            if (!vendor) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "vendor not found"
                });
            }
            const data = {
                id: authentication.id,
                session_token: authentication.session_token,
                vendor,
            }
            return res.status(200).json(data)
        }

        throw new BaseError({
            name: BaseErrorArgsName.Unauthorized,
            message: "role not found"
        });
    } catch (error) {
        next(error)
    }
};

export const onGoogle = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const user = await getUserByEmail('alpinnz@gmail.com');

        if(!user){
            throw new BaseError({
                name: BaseErrorArgsName.Unauthorized,
                message: "user not found"
            });
        }


        const salt: string = random();
        const session_token: string = authentication(salt, user.id);

        const result = await prisma.authentication.create({
            data: {
                session_token,
                ref_id: user.id,
                ref_table: AuthRole.USER,
            },
        });


        res.cookie(AUTHENTICATION, session_token, {domain: 'localhost', path: '/'});

        const data = {
            id: result.id,
            session_token: result.session_token,
            user,
        }


        return res.status(200).json(data).end();
    } catch (error) {
        next(error)
    }
};