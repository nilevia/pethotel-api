import {Router} from 'express';

import * as UploadController from '../controllers/upload_controller';
import {isAuthenticated} from "../middlewares";
import fileUpload from "express-fileupload";

export default class UploadRouter {
    private router: Router;
    private controller = UploadController;
    private prefix: string = '/upload';

    constructor(router: Router) {
        this.router = router;
        this.router.post(`${this.prefix}/image`, isAuthenticated, fileUpload(), this.controller.uploadImage);
    }
}
