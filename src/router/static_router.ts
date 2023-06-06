import {Router} from 'express';

import * as Controller from '../controllers/static_controller';
import {isAuthenticatedAll} from "../middlewares";

export default class StaticRouter {
    private router: Router;
    private controller = Controller;

    constructor(router: Router) {
        this.router = router;
        this.router.get(`/city`,isAuthenticatedAll, this.controller.getCitys);
    }
}
