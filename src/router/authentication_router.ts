import {Router} from 'express';

import AuthenticationController from '../controllers/authentication_controller';

export default class AuthenticationRouter {
    private router: Router;
    private controller: AuthenticationController = new AuthenticationController();
    private prefix: string = '/authentication';

    constructor(router: Router) {
        this.router = router;
        this.router.post(`${this.prefix}/vendor/register`, this.controller.vendorRegister);
        this.router.post(`${this.prefix}/vendor/login`, this.controller.vendorLogin);
        this.router.post(`${this.prefix}/user/google`, this.controller.onGoogle);
        this.router.post(`${this.prefix}/refresh`, this.controller.refresh);
        this.router.post(`${this.prefix}/logout`, this.controller.logout);

    }
}