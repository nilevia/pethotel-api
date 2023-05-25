import 'express-async-errors';
import * as dotenv from 'dotenv';

dotenv.config()
import express, {Express, NextFunction, Request, Response} from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import {ResponseError} from "./exceptions/response";
import {BaseError, HttpCode} from "./exceptions/base_error";
import {Firebase} from "./libraries/firebase";

class App {
    private readonly app: Express= express();
    private firebase: Firebase;
    private server: http.Server;
    private port: number = parseInt(process.env.PORT || '8080');

    constructor() {
        this.app = express();
        this.firebase = new Firebase();

        this.app.use(cors({
            credentials: true,
        }));

        this.app.use(compression());
        this.app.use(cookieParser());
        this.app.use(express.json());

        this.server = http.createServer(this.app);


        this.server.listen(this.port, (): void => {
            console.log(`[SERVER] running on http://localhost:${this.port}`);
        })

        this.app.use('/', router());

        this.app.all('*', (req: Request, res: Response, next: NextFunction): void => {
            res.status(HttpCode.NOT_FOUND).send('<h1>404! Page not found</h1>');
        });

        this.app.use((err: Error | BaseError, req: Request, res: Response, next: NextFunction) => {
            ResponseError(err, res);
        });
    }

}

new App();




