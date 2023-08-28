import {Router} from 'express';

import * as Controller from '../controllers/order.controller';
import {isAuthenticatedAll, isAuthenticatedVendor} from "../middlewares/authentication.middleware";

export default class OrderRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/order/hotel';

    constructor(router: Router) {
        this.router = router;
        this.router.get(`${this.prefix}/list`, isAuthenticatedAll, this.controller.getOrders);
        this.router.get(`${this.prefix}/:order_id`, isAuthenticatedAll, this.controller.getOrderById);
        this.router.patch(`${this.prefix}/:order_id`, isAuthenticatedAll, this.controller.updateOrderById);
        this.router.post(`${this.prefix}`, isAuthenticatedAll, this.controller.createOrder);

        //report
        this.router.get(`${this.prefix}/report/:order_id`, isAuthenticatedAll, this.controller.getOrderHotelReports);
        this.router.post(`${this.prefix}/report/:order_id`, isAuthenticatedVendor, this.controller.createOrderHotelReport);
    }
}
