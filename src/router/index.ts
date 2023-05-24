import {Router} from 'express';
import authentication from './authentication';
import users from "./user";
import vendor from "./vendor";

const router: Router = Router();

export default (): Router => {
    authentication(router);
    users(router);
    vendor(router);

    return router;
}