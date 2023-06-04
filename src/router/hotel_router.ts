import {Router} from 'express';

import * as Controller from '../controllers/hotel_controller';
import {isAuthenticated} from "../middlewares";

export default class HotelRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/hotel';

    constructor(router: Router) {
        this.router = router;
        // TODO CRUD
        this.router.get(`${this.prefix}`, isAuthenticated, this.controller.getHotels);
        this.router.get(`${this.prefix}/:id`, isAuthenticated, this.controller.getHotelById);
        this.router.patch(`${this.prefix}/:id`, this.controller.updateHotelById);
        // TODO HOTEL
        this.router.get(`${this.prefix}/:hotel_id/room`, isAuthenticated, this.controller.getRoomsByHotelId);
        this.router.get(`${this.prefix}/:hotel_id/room/:id`, isAuthenticated, this.controller.getRoomByHotelWithById);
        this.router.patch(`${this.prefix}/:hotel_id/room/:id`, this.controller.updateRoomByHotelWithById);
        this.router.post(`${this.prefix}/:hotel_id/room`, isAuthenticated, this.controller.createRoom);
    }
}
