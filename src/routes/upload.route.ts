import {Router} from 'express';

import * as UploadController from '../controllers/upload.controller';
import {isAuthenticatedAll} from "../middlewares/authentication.middleware";
import fileUpload from "express-fileupload";

export default class UploadRouter {
    private router: Router;
    private controller = UploadController;
    private prefix: string = '/upload';

    constructor(router: Router) {
        this.router = router;
        this.router.post(`${this.prefix}/image`, isAuthenticatedAll, fileUpload(), this.controller.uploadImage);
    }
}
