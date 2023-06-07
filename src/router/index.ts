import express from 'express';
import AuthenticationRouter from "./authentication_router";
import VendorRouter from "./vendor_router";
import UploadRouter from "./upload_router";
import UserRouter from "./user_router";
import CityRouter from "./city_router";
import HotelRouter from "./hotel_router";
import OrderRouter from "./order_router";
import RoomRouter from "./room_router";

export default class Router {
    public readonly router: express.Router;

    constructor() {
        this.router = express.Router();
        new AuthenticationRouter(this.router);
        new VendorRouter(this.router)
        new UserRouter(this.router)
        new UploadRouter(this.router);
        new CityRouter(this.router);
        new HotelRouter(this.router);
        new OrderRouter(this.router);
        new RoomRouter(this.router);
    }
}