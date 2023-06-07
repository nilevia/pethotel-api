import {Router} from 'express';

import * as Controller from '../controllers/hotel_controller';
import {isAuthenticatedAdmin, isAuthenticatedAll, isAuthenticatedVendor} from "../middlewares";

export default class HotelRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/hotel';

    constructor(router: Router) {
        this.router = router;
        // TODO CRUD
        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getHotels);
        this.router.get(`${this.prefix}/:vendor_id`, isAuthenticatedAll, this.controller.getHotelById);
        this.router.patch(`${this.prefix}/:vendor_id`, isAuthenticatedAdmin, this.controller.updateHotelById);
        // // TODO HOTEL
        // this.router.get(`${this.prefix}/:vendor_id/room`, isAuthenticatedAll, this.controller.getRoomsByHotelId);
        // this.router.get(`${this.prefix}/:vendor_id/room/:room_id`, isAuthenticatedAll, this.controller.getRoomByHotelWithById);
        // this.router.patch(`${this.prefix}/:vendor_id/room/:room_id`, isAuthenticatedVendor, this.controller.updateRoomByHotelWithById);
        // this.router.post(`${this.prefix}/:vendor_id/room`, isAuthenticatedVendor, this.controller.createRoom);
    }
}
