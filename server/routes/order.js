import express from 'express';
import { OrderController } from '../controllers';
import { Order }  from '../validations';
import { verifyToken } from '../middlewares/auth'

const { postOrder, editOrderPrice } = OrderController;
const { postOrderChecker } = Order;

export const orderRouter = express.Router();


orderRouter.post('/order', verifyToken, postOrderChecker, postOrder);
orderRouter.patch('/order/:orderId/price', verifyToken, editOrderPrice);





