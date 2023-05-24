import 'express-async-errors';
import express, {Express, NextFunction, Request, Response} from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import {ResponseError} from "./exceptions/response";
import {BaseError, HttpCode} from "./exceptions/base_error";

const app: Express = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json());


const server: http.Server = http.createServer(app);


const PORT: number = parseInt(process.env.PORT || '8080')

server.listen(PORT, (): void => {
    console.log(`[SERVER] running on http://localhost:${PORT}`);
})

app.use('/', router());

app.all('*', (req: Request, res: Response): void => {
    res.status(HttpCode.NOT_FOUND).send('<h1>404! Page not found</h1>');
});

app.use((err: Error | BaseError, req: Request, res: Response) => {
    ResponseError(err, res);
});


