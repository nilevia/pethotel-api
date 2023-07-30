import {Router} from 'express';

import * as Controller from '../controllers/static.controller';
import {isAuthenticatedAll} from "../middlewares/authentication.middleware";

export default class StaticRouter {
    private router: Router;
    private controller = Controller;

    constructor(router: Router) {
        this.router = router;
        this.router.get(`/city`,isAuthenticatedAll, this.controller.getCitys);
    }
}
