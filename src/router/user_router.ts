import {Router} from 'express';

import * as Controller from '../controllers/user_controller';
import {isAuthenticated} from "../middlewares";

export default class UserRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/user';

    constructor(router: Router) {
        this.router = router;
        // TODO Profile
        this.router.get(`${this.prefix}/profile`, isAuthenticated, this.controller.getUserProfile);
        this.router.patch(`${this.prefix}/profile`, isAuthenticated, this.controller.updateUserProfile);
    }
}
