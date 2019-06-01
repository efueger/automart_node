import { cars, users } from '../datastore';


/**
 * Class representing CarController
 * @class CarController
 */
export class CarController {
  /**
   * Post car Ad
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */
  
  static postCarAd(req, res) {
    const { state, status = 'unsold', price, manufacturer, model, bodytype, imageurl } = req.body;

    const id = cars[cars.length - 1].id + 1;
    const createdon = new Date();
    
    const owner = req.authData.payload.id

    const newCarAd = {
      id,
      owner,
      createdon,
      manufacturer,
      model,
      price,
      state,
      status,
      bodytype,
      imageurl
    };
    cars.push(newCarAd);
    return res.status(201).json({
      status: 201,
      data: { newCarAd }
    });
  }

  /**
   * Find car Ad
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */

  static getSingleCarAd(req, res) {
    const { foundCar } = req.body;
    return res.status(200).json({
      status: 200,
      data: foundCar
    });
  }

  /**
  * Fetch All posted Ads (Admin)
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} JSON object representing success
  * @memeberof CarController
  */
  static fetchAllCarAds(req, res) {
    return res.status(200).json({
      status: 200,
      data: cars
    });
  }

  /**
      * Delete Single posted Ad (Admin)
      * @static
      * @param {object} req - The request object
      * @param {object} res - The response object
      * @return {object} JSON object representing success
      * @memeberof CarController
      */
  static deleteSingleCarAd(req, res) {
    const { foundCar } = req.body;
    cars.splice(foundCar, 1);
    return res.status(200).json({
      status: 200,
      data: 'Car Ad successfully deleted'
    });
  }

  /**
   * Edit status of posted Ad
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */

  static editAdStatus(req, res) {
    const { foundCar } = req.body;
    if (foundCar.status === 'sold') {
      return res.status(422).json({
        status: 422,
        error: 'This ad has already been marked as sold'
      });
    }
    foundCar.status = 'sold'
    return res.status(200).json({
      status: 200,
      data: foundCar
    });
  }

  /**
  * Edit price of posted Ad
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @return {object} JSON object representing success
  * @memeberof CarController
  */

  static editAdPrice(req, res) {
    let { price, foundCar } = req.body
    if (!price) {
      return res.status(400).json({
        status: 400,
        error: 'Enter a price or retain the old price'
      });
    }
    if (price) {
      price = price.trim();
      if (!/^\d+$/.test(price)) {
        return res.status(400).json({
          status: 400,
          error: 'Price should be only a string of numbers'
        });
      }
    }
    foundCar.price = price;
    return res.status(200).json({
      status: 200,
      data: foundCar
    });
  }

  /**
   * Filter by unsold/available and price range of cars
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */
  static filterSearch(req, res, next) {
    if (req.query.status) {
      let { status, minprice, maxprice } = req.query;
      status = status.trim().toLowerCase();
      if (status && !minprice && !maxprice) {
        const statusResult = cars.filter(car => car.status === status)
        if (statusResult.length === 0) {
          return res.status(404).json({
            status: 404,
            error: 'Sorry, this does not exist'
          });
        }
        return res.status(200).json({
          status: 200,
          data: statusResult
        });
      }
      if (status && minprice && maxprice) {
        minprice = Number(minprice.trim());
        // if (minprice === NaN || maxprice === NaN) {
        //   return res.status(400).json({
        //     status: 400,
        //     error: 'minimum and maximum price should be numbers'
        //   });
        // }
        maxprice = Number(maxprice.trim());
        const elasticResult = cars.filter(car => car.status === status && Number(car.price) >= minprice && Number(car.price) <= maxprice);
        if (elasticResult.length === 0) {
          return res.status(404).json({
            status: 404,
            error: 'There is no result for your search now'
          });
        }
        return res.status(200).json({
          status: 200,
          data: elasticResult
        });
      }

     return res.status(404).json({
       status: 404,
       error: 'There seems to be an issue with your search'
     });

    }
    next();
  }
};