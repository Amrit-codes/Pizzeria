import express from 'express';

import { registeruser, loginuser, userList } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registeruser);

userRouter.post('/login', loginuser);

userRouter.get('/list', userList);

export default userRouter;

