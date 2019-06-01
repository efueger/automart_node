import { users, cars, orders } from '../datastore';

/**
 * Class representing CarController
 * @class OrderController
 */
export class OrderController {
  
  /**
   * Post Order
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof OrderController
   */
   
   //For dB, user should not be able to order a car he posted.

   static postOrder(req, res) {
       const { priceOffered, carId, status = 'pending' } = req.body;

       const id = orders[orders.length - 1].id + 1;
       const createdon = new Date();

       let foundCar = cars.find(car => car.id === Number(carId));
       if(!foundCar) {
           res.status(404).json({
               status: 404,
               error: 'Car does not exist'
           });
       }
       const carIndex = foundCar.id;
       const price = foundCar.price;

       const newOrder = {
           id,
           carIndex,
           createdon,
           status,
           price,
           priceOffered
       };

       orders.push(newOrder);
       return res.status(201).json({
           status: 201,
           data: { newOrder }
       });
   }

   /**
   * Edit order price
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof OrderController
   */

    static editOrderPrice(req, res) {
        const { newPriceOffered } = req.body;

        if (!newPriceOffered.trim() === '' || !/^\d+$/.test(newPriceOffered)) {
            return res.status(400).json({
                status: 400,
                error: 'new price offered should be numbers only'
            });
        }

        let oldPriceOffered, id, carId, status;
        const { orderId } = req.params;
        const { email } = req.authData.payload;
        const foundUser = users.find(user => user.email === email);
        const userId = foundUser.id
        const foundOrder = orders.find(order => order.id === Number(orderId) && order.buyerId === userId);

        if (!foundOrder) {
            return res.status(404).json({
                status: 404,
                error: 'Order is not available'
            });
        }
        if (foundOrder && foundOrder.status === 'pending') {
            oldPriceOffered = foundOrder.amount;

            id = foundOrder.id;
            carId = foundOrder.carId;
            status = foundOrder.status;
            const updatedOrder = {
                id,
                carId,
                status,
                oldPriceOffered,
                newPriceOffered
            };
            return res.status(200).json({
                status: 200,
                data:  updatedOrder 
            });
        }
        return res.status(422).json({
            status: 422,
            error: 'Sorry, this order is no longer pending'
        });

    }
}