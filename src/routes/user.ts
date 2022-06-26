import express from 'express';
const router = express.Router()
import { UserController } from '../controller/user.controller';

const userController = new UserController();

router.get('/user',userController.getOneUser )


module.exports = router

