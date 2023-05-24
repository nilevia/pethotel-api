import {Router} from 'express';
import {deleteVendor, getAllVendors, updateVendor} from "../controllers/vendor_controller";
import {isAuthenticatedVendor} from "../middlewares";


export const prefix: string = '/vendor';

export default (router: Router): void => {
    router.get(`${prefix}`, isAuthenticatedVendor, getAllVendors);
    router.delete(`${prefix}/:id`, isAuthenticatedVendor, deleteVendor);
    router.patch(`${prefix}/:id`, isAuthenticatedVendor, updateVendor);
}