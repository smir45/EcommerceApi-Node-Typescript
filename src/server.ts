import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';

export const app = express();

(async () => {
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json())


})();