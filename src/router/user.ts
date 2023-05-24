import {Router} from 'express';

import {deleteUser, getAllUsers, updateUser} from '../controllers/user_controller';
import {isAuthenticatedUser} from "../middlewares";


export const prefix: string = '/user';

export default (router: Router):void => {
    router.get(`${prefix}`, isAuthenticatedUser, getAllUsers);
    router.delete(`${prefix}/:id`, isAuthenticatedUser, deleteUser);
    router.patch(`${prefix}/:id`, isAuthenticatedUser, updateUser);
}