import {Router} from 'express';

import * as Controller from '../controllers/city_controller';
import {isAuthenticated, isAuthenticatedAdmin, isAuthenticatedAll} from "../middlewares";

export default class CityRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/city';

    constructor(router: Router) {
        this.router = router;

        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getListCity);
        this.router.get(`${this.prefix}/:id`, isAuthenticatedAll, this.controller.getCityById);
        this.router.post(`${this.prefix}`, isAuthenticatedAdmin, this.controller.createCity);
        this.router.patch(`${this.prefix}/:id`, isAuthenticatedAdmin, this.controller.updateCityById);
        this.router.delete(`${this.prefix}/:id`, isAuthenticatedAdmin, this.controller.deleteCityById);
    }
}
