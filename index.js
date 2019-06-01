import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { defaultRouter, userRouter, carRouter, orderRouter } from './server/routes';

dotenv.config();

const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', userRouter);
app.use('/api/v1', carRouter);
app.use('/api/v1', orderRouter);
app.use('/', defaultRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is live on PORT ${port}`);
});

export default app;