import {Router} from 'express';
import {onGoogle, refresh, vendorLogin, vendorRegister} from '../controllers/authentication_controller';

export const prefix: string = '/authentication';

export default (router: Router): void => {
    router.post(`${prefix}/vendor/register`, vendorRegister);
    router.post(`${prefix}/vendor/login`, vendorLogin);
    router.post(`${prefix}/user/google`, onGoogle);
    router.post(`${prefix}/refresh`, refresh);
}