import express from 'express';
import { UserController } from '../controllers';
import { User }  from '../validations';

const { register, login } = UserController;
const { registerCheck, loginCheck } = User;

export const userRouter = express.Router();

userRouter.post('/auth/register', registerCheck, register);
userRouter.post('/auth/login', loginCheck, login);