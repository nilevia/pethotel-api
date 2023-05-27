import {NextFunction, Request, Response} from "express";
import fileUpload from "express-fileupload";
import * as path from "path";
import {BaseError, BaseErrorArgsName} from "../exceptions/base_error";

import * as process from "process";
import {ResponseSuccess} from "../exceptions/response";

export const dirPublic: string = 'public'
export const dirUploads: string = 'uploads'
export const dirPrefixs: string = 'images'
export const uploadImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {


        const {ref_table, ref_id, ref_column} = req.body;

        if (!ref_table || !ref_id || !ref_column) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Input Rrquired ref_table, ref_id, ref_column'
            });
        }


        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }

        const image: fileUpload.UploadedFile = req.files.image as fileUpload.UploadedFile;

        const fileTypes: RegExp = /jpeg|jpg|png/;

        const extName: boolean = fileTypes.test(path.extname(image.name).toLowerCase());
        const mimeType: boolean = fileTypes.test(image.mimetype);

        if (!mimeType && !extName) {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Only images are allowed'
            });
        }

        image.size > 1024 * 1024 * 2 && (() => {
            throw new BaseError({
                name: BaseErrorArgsName.ValidationError,
                message: 'Image size should be less than 2mb'
            });
        })();


        const filename: string = `${ref_table}-${ref_id}-${ref_column}.jpg`;

        const dirPath: string = `${dirPublic}/${dirUploads}/${dirPrefixs}/${filename}`;

        image.mv(path.join(process.cwd(), dirPath), async (error) => {
            if (error) {
                return res.status(500).send(error);
            }

            const data = {
                url: `${process.env.DOMAIN}/${dirPath}`,
                path: dirPath,
                filename: filename,
            }

            ResponseSuccess(res, {data, message: "Upload Success"});
        });

    } catch (error) {
        next(error);
    }
}
