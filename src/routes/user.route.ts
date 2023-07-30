import {Router} from 'express';

import * as Controller from '../controllers/user.controller';
import {isAuthenticatedUser} from "../middlewares/authentication.middleware";

export default class UserRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/user';

    constructor(router: Router) {
        this.router = router;
        // TODO Profile
        this.router.get(`${this.prefix}/profile`, isAuthenticatedUser, this.controller.getUserProfile);
        this.router.patch(`${this.prefix}/profile`, isAuthenticatedUser, this.controller.updateUserProfile);
    }
}
