import {Request} from "express";
import {ResultWithContext} from "express-validator/src/chain";
import {checkSchema, Schema, ValidationError} from "express-validator";
import {FieldInstance} from "express-validator/src/base";
import {ParamSchema} from "express-validator/src/middlewares/schema";

type ValidatorResult = {
    errors: ValidationError[];
    values: Map<string, any> | any;
}

export const Validator = async (req: Request, schema: Schema): Promise<ValidatorResult> => {
    const validator: ResultWithContext[] = await checkSchema(schema).run(req);

    let errors: ValidationError[] = [];
    let values: any = {};

    validator.forEach((e: ResultWithContext): void => {
        e.context.getData().forEach(((x: FieldInstance): void => {
            values[x.path] = x.value;
        }));

        if (!e.isEmpty()) {
            e.array().forEach((error: ValidationError): void => {
                errors.push(error)
            })
        }
    })

    return {errors, values};
}

interface iisString {
    label: string;
}

export const isString = (args: iisString): ParamSchema => {
    return {
        isString: {errorMessage: `${args.label} must be string`},
        optional: {options: {values: 'null'}}
    }
}

interface iisFloat {
    label: string;
}

export const isFloat = (args: iisString): ParamSchema => {
    return {
        isString: {errorMessage: `${args.label} must be float`},
        optional: {options: {values: 'null'}}
    }
}