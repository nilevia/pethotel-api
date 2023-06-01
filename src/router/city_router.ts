import {Router} from 'express';

import * as Controller from '../controllers/city_controller';
import {isAuthenticated} from "../middlewares";

export default class CityRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/city';

    constructor(router: Router) {
        this.router = router;

        this.router.get(`${this.prefix}`, isAuthenticated, this.controller.getListCity);
        this.router.get(`${this.prefix}/:id`, isAuthenticated, this.controller.getListCity);
        this.router.post(`${this.prefix}`, isAuthenticated, this.controller.createCity);
        this.router.patch(`${this.prefix}/:id`, isAuthenticated, this.controller.updateCityById);
        this.router.delete(`${this.prefix}/:id`, isAuthenticated, this.controller.deleteCityById);


    }
}
