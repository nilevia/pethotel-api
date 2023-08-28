import {Router} from 'express';

import * as Controller from '../controllers/city.controller';
import {isAuthenticated, isAuthenticatedAdmin, isAuthenticatedAll} from "../middlewares/authentication.middleware";

export default class CityRouter {
    private router: Router;
    private controller = Controller;
    private prefix: string = '/city-list';

    constructor(router: Router) {
        this.router = router;

        this.router.get(`${this.prefix}`, isAuthenticatedAll, this.controller.getCities);
        this.router.get(`${this.prefix}/:city_id`, isAuthenticatedAll, this.controller.getCityById);
        this.router.post(`${this.prefix}`, isAuthenticatedAdmin, this.controller.createCity);
        this.router.patch(`${this.prefix}/:city_id`, isAuthenticatedAdmin, this.controller.updateCityById);
    }
}
