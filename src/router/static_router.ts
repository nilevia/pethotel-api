import {Router} from 'express';

import * as Controller from '../controllers/static_controller';

export default class StaticRouter {
    private router: Router;
    private controller = Controller;

    constructor(router: Router) {
        this.router = router;
        this.router.get(`/city-list`, this.controller.getCitys);
    }
}
