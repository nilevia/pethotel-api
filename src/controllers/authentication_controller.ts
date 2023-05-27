import {NextFunction, Request, Response} from 'express';
import {verifyJWT, random} from "../helpers";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";
import {AUTHENTICATION, AuthRole} from "../middlewares";
import * as VendorRepository from "../repositories/vendor_repository";
import * as AuthenticationRepository from "../repositories/authentication_repository";
import * as UserRepository from "../repositories/user_repository";
import {Validator} from "../helpers/validator";
import * as console from "console";
import {ResponseSuccess} from "../exceptions/response";

export default class AuthenticationController {

    constructor() {
    }

    public async vendorLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {errors, values} = await Validator(req, {
                password: {
                    isLength: {
                        options: {min: 8},
                    },
                    errorMessage: "Password must be greater than 8",
                },
                email: {
                    isEmail: true,
                    normalizeEmail: true,
                }
            })

            if (errors.length > 0) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: errors[0].msg
                });
            }

            const {email, password} = values;

            const vendor = await VendorRepository.getVendorByEmail(email);

            if (vendor === null) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: "Email atau Password salah"
                });
            }

            const expectedHash: string = verifyJWT(vendor.salt, password);

            if (vendor.password != expectedHash) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: "Data tidak ditemukan"
                });
            }

            const salt: string = random();
            const token: string = verifyJWT(salt, vendor.id!);

            const authentication = await AuthenticationRepository.createAuthentication({
                    token,
                    ref_id: vendor.id!,
                    ref_table: AuthRole.VENDOR,
                }
            );

            if (authentication == null) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "failed create token"
                });
            }

            res.cookie(AUTHENTICATION, token, {domain: 'localhost', path: '/'});

            const data = {
                token: token,
                vendor,
            }

            ResponseSuccess(res, {data, message: "Login Success"});
        } catch (error) {
            next(error)
        }
    }

    public async vendorRegister(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {errors, values} = await Validator(req, {
                hotel_name: {
                    isString: true,
                    isLength: {
                        options: {min: 8},
                    },
                    errorMessage: "Hotel Name must be greater than 8",
                },
                password: {
                    isLength: {
                        options: {min: 8},
                    },
                    errorMessage: "Password must be greater than 8",
                },
                email: {
                    isEmail: true,
                    normalizeEmail: true,
                    custom: {
                        options: async (email): Promise<void> => {
                            const existing = await VendorRepository.getVendorByEmail(email);
                            if (existing) {
                                throw new Error('Email already in use');
                            }
                        }
                    }
                }
            })

            if (errors.length > 0) {
                throw new BaseError({
                    name: BaseErrorArgsName.ValidationError,
                    message: errors[0].msg
                });
            }

            const {email, password, hotel_name} = values;

            const salt: string = random();
            const data = await VendorRepository.createVendor({
                email,
                hotel_name,
                salt,
                password: verifyJWT(salt, password),
            });

            ResponseSuccess(res, {data, message: "Register Success"});
        } catch (error) {
            next(error)
        }
    }

    public async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            let token;
            if (req.headers.authorization != undefined) {
                token = req.headers.authorization.split(' ')[1];
            } else {
                token = req.cookies[AUTHENTICATION];
            }
            console.log(req.headers.authorization?.split(' ')[1])
            console.log(req.cookies[AUTHENTICATION])

            if (!token) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "token not found"
                });
            }

            let authentication = await AuthenticationRepository.getAuthenticationByToken(token);

            if (!authentication) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "token not found"
                });
            }


            if (authentication.ref_table === AuthRole.USER) {
                const user = await UserRepository.getUserById(authentication.ref_id);
                if (!user) {
                    throw new BaseError({
                        name: BaseErrorArgsName.Unauthorized,
                        message: "user not found"
                    });
                }
                const data = {
                    token: authentication.token,
                    user,
                }
                return ResponseSuccess(res, {data, message: "Refresh Success"});
            }
            if (authentication.ref_table === AuthRole.VENDOR) {
                const vendor = await VendorRepository.getVendorById(authentication.ref_id);
                if (!vendor) {
                    throw new BaseError({
                        name: BaseErrorArgsName.Unauthorized,
                        message: "vendor not found"
                    });
                }

                res.cookie(AUTHENTICATION, authentication.token, {domain: 'localhost', path: '/'});

                const data = {
                    token: authentication.token,
                    vendor,
                }
                return ResponseSuccess(res, {data, message: "Refresh Success"});
            }

            throw new BaseError({
                name: BaseErrorArgsName.Unauthorized,
                message: "role not found"
            });
        } catch (error) {
            next(error)
        }
    }

    public async logout(req: Request, res: Response, next: NextFunction) {
        try {
            let token;
            if (req.headers.authorization != undefined) {
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

            const authentication = await AuthenticationRepository.getAuthenticationByToken(token);
            if (authentication == null) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "Token tidak valid"
                });
            }

            await AuthenticationRepository.deleteAuthenticationByToken(token);

            return ResponseSuccess(res, {data: true, message: "Logout Success"});
        } catch (error) {
            next(error)
        }
    }

    public async onGoogle(req: Request, res: Response, next: NextFunction) {
        try {
            let user = await UserRepository.getUserByEmail('alpinnz@gmail.com');

            if (!user) {
                user = await UserRepository.createUser({
                    email: 'alpinnz@gmail.com',
                    name: 'Alfin Noviaji',
                });
            }


            const salt: string = random();
            const token: string = verifyJWT(salt, user.id);

            const authentication = await AuthenticationRepository.createAuthentication({
                    token,
                    ref_id: user.id,
                    ref_table: AuthRole.USER,
                }
            );

            if (authentication == null) {
                throw new BaseError({
                    name: BaseErrorArgsName.Unauthorized,
                    message: "failed create token"
                });
            }


            res.cookie(AUTHENTICATION, token, {domain: 'localhost', path: '/'});

            const data = {
                token: token,
                user,
            }

            return ResponseSuccess(res, {data, message: "Refresh Success"});
        } catch (error) {
            next(error)
        }
    }

}
