import {Router} from 'express';

import * as Controller from '../controllers/admin_controller';
import { isAuthenticatedAdmin} from "../middlewares";

export default class AdminRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/admin';

    constructor(router: Router) {
        this.router = router;

        this.router.get(`${this.prefix}/`, isAuthenticatedAdmin, this.controller.getAdmins);
        this.router.get(`${this.prefix}/:id`, isAuthenticatedAdmin, this.controller.getAdminById);
        // this.router.delete(`${this.prefix}/:id`, isAuthenticatedAdmin, this.controller.deleteAdmin);
    }
}
