import {Router} from 'express';

import * as VendorController from '../controllers/vendor.controller';
import {isAuthenticatedVendor} from "../middlewares/authentication.middleware";

export default class VendorRouter {
    private router: Router;
    private controller = VendorController;
    private prefix: string = '/vendor';

    constructor(router: Router) {
        this.router = router;
        // TODO CRUD
        // this.router.get(`${this.prefix}`, this.controller.getAllVendors);
        // this.router.get(`${this.prefix}/:id`, this.controller.getVendorsById);
        // this.router.delete(`${this.prefix}/:id`, this.controller.deleteVendor);
        // this.router.patch(`${this.prefix}/:id`, this.controller.updateVendor);

        // TODO Profile
        this.router.get(`${this.prefix}/profile`, isAuthenticatedVendor, this.controller.getVendorProfile);
        this.router.patch(`${this.prefix}/profile`, isAuthenticatedVendor, this.controller.updateVendorProfile);
    }
}
