import { Request } from "express";
import { Schema, ValidationError } from "express-validator";
import { ParamSchema } from "express-validator/src/middlewares/schema";
type ValidatorResult = {
    errors: ValidationError[];
    values: Map<string, any> | any;
};
export declare const Validator: (req: Request, schema: Schema) => Promise<ValidatorResult>;
interface iisString {
    label: string;
}
export declare const isString: (args: iisString) => ParamSchema;
export declare const isBoolean: (args: iisString) => ParamSchema;
export declare const isUrl: (args: iisString) => ParamSchema;
export declare const isMobilePhone: (args: iisString) => ParamSchema;
export declare const isFloat: (args: iisString) => ParamSchema;
export declare const isNumber: (args: iisString) => ParamSchema;
export {};
