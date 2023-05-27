import express from 'express';
import AuthenticationRouter from "./authentication_router";
import VendorRouter from "./vendor_router";
import UploadRouter from "./upload_router";

export default class Router {
    public readonly router: express.Router;

    constructor() {
        this.router = express.Router();
        new AuthenticationRouter(this.router);
        new VendorRouter(this.router)
        new UploadRouter(this.router);
    }
}