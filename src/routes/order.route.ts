import {Router} from 'express';

import * as Controller from '../controllers/order.controller';
import {isAuthenticated, isAuthenticatedAll} from "../middlewares/authentication.middleware";

export default class OrderRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/order';

    constructor(router: Router) {
        this.router = router;
        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getOrders);
        this.router.get(`${this.prefix}/:order_id`, isAuthenticatedAll, this.controller.getOrderById);
        this.router.patch(`${this.prefix}/:order_id`,isAuthenticatedAll, this.controller.updateOrderById);
        this.router.post(`${this.prefix}`, isAuthenticatedAll, this.controller.createOrder);
    }
}
