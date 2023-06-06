import {Router} from 'express';

import * as Controller from '../controllers/order_controller';
import {isAuthenticated} from "../middlewares";

export default class OrderRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/order';

    constructor(router: Router) {
        this.router = router;
        this.router.get(`${this.prefix}`, isAuthenticated, this.controller.getOrders);
        this.router.get(`${this.prefix}/:order_id`, isAuthenticated, this.controller.getOrderById);
        this.router.patch(`${this.prefix}/:order_id`,isAuthenticated, this.controller.updateOrderById);
        this.router.post(`${this.prefix}`, isAuthenticated, this.controller.createOrder);
    }
}
