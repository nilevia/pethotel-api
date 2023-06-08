import {Router} from 'express';

import * as Controller from '../controllers/room_controller';
import { isAuthenticatedAll, isAuthenticatedVendor} from "../middlewares";


export default class RoomRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/room';

    constructor(router: Router) {
        this.router = router;
        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getRooms);
        this.router.get(`${this.prefix}/:room_id`, isAuthenticatedAll, this.controller.getRoomById);
        this.router.patch(`${this.prefix}/:room_id`, isAuthenticatedVendor, this.controller.updateRoomById);
        this.router.post(`${this.prefix}`, isAuthenticatedVendor, this.controller.createRoom);
    }
}
