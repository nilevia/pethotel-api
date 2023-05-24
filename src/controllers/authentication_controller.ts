import {NextFunction, Request, Response} from 'express';
import {authentication, random} from "../helpers";
import {VerifyToken} from "../libraries/google";
import {createVendor, getVendorByEmail} from "../repositories/vendor_repository";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import prisma from "../prisma";
import {AUTHENTICATION, AuthRole} from "../middlewares";


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
            select: {
                session_token: true,
            }
        });


        res.cookie(AUTHENTICATION, session_token, {domain: 'localhost', path: '/'});

        const data = {...vendor, authentication: result}


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

export const onGoogle = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {code} = req.body;

        if (!code) {
            return res.sendStatus(400);
        }


        const auth = await VerifyToken(code);

        return res.status(200).json(auth).end();
    } catch (error) {
        next(error)
    }
};