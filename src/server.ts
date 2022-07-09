import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { UserController } from './controller/user.controller';
import 'reflect-metadata';

export const app = express();

(async () => {

    app.use(cors());
    app.use(cookieParser());
    app.use(express.json())
    const userController = new UserController();

    app.get('/user',userController.getUser )
    app.post('/user/create', userController.createUser)

})();