import express from 'express';
import AuthenticationRouter from "./authentication.route";
import VendorRouter from "./vendor.route";
import UploadRouter from "./upload.route";
import UserRouter from "./user.route";
import CityRouter from "./city.route";
import HotelRouter from "./hotel.route";
import OrderRouter from "./order.route";
import RoomRouter from "./room.route";

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