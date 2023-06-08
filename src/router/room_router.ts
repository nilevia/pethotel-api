import {Router} from 'express';

import * as Controller from '../controllers/config_controller';
import { isAuthenticatedAll, isAuthenticatedVendor} from "../middlewares";


export default class ConfigRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/config';

    constructor(router: Router) {
        this.router = router;
        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getConfig);
        this.router.patch(`${this.prefix}`, isAuthenticatedVendor, this.controller.setConfig);
    }
}
