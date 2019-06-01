import validator from 'validatorjs';
import { cars } from '../datastore';

/**
 * Class representing user validations
 * @class Car
 */

//  export class Car {
//      /**
//       * @param {object} req - The request object
//       * @param {object} res - The response oject
//       * @param {function} next 
//       * @returns {object} JSON representing the failure message
//       */

//       static postAdCheck(req, res, next) {
//           let { state, price, manufacturer, model, bodytype } = req.body;

//           const rules = {
//               state: 'required|alpha:in:new,used',
//             //   status: 'required|alpha:in:sold,unsold',
//               price: 'required|integer|min:1',
//               manufacturer: 'required|alpha',
//               model: 'required|alpha',
//               bodytype: 'required|alpha'
//           };

//           const validation = new validator(req.body, rules);

//           if (validation.fails()) {
//               return res.status(400).json({
//                   status: 400,
//                   error: validation.errors.errors
//               });
//           }
//           if (state.toLowerCase().trim() !== 'new' && state.toLowerCase().trim() !== 'used') {
//               return res.status(400).json({
//                   status: 400,
//                   error: 'State can only be new or used'
//               });
//           }
//         //   if (status.toLowerCase.trim() !== 'sold' || status.toLowerCase.trim() !== 'unsold') {
//         //       return res.status(400).json({
//         //           status: 400,
//         //           error: 'Status can only be sold or unsold'
//         //       });
//         //   }
//           req.body.state = state.toLowerCase().trim();
//         //   req.body.status = state.toLowerCase().trim();
//           req.body.price = price.trim()
//           req.body.manufacturer = manufacturer.toLowerCase().trim();
//           req.body.model = model.toLowerCase().trim();
//           req.body.bodytype = bodytype.toLowerCase().trim();
//           req.authData;
//           return next();
//       }
//  }

export class Car {
    static postAdchecker(req, res, next) {
        let { state, price, manufacturer, model, bodytype, imageurl } = req.body;
        
        const errors = [];
        if (!state) {
            const error = {
                message: 'Please specify the state of the car'
            };
        
            errors.push(error);
        }
        if (state) {
            state = state.trim();
            if (state.toLowerCase() !== 'new' && state.toLowerCase() !== 'used') {
                const error = {
                    message: 'State can only be new or used'
                };
                errors.push(error);
            }

        }


        if (!price) {
            const error = {
                message: 'You will need to specify a sale price'
            };
            errors.push(error);
        }
        if (price) {
            price = price.trim();
            if (!/^\d+$/.test(price)) {
                const error = {
                    message: 'Price should be numbers only'
                };
                errors.push(error);
            }
        }

        if (!manufacturer) {
            const error = {
                message: 'Specify a manufacturer'
            };
            errors.push(error);
        }

        if (manufacturer) {
            manufacturer = manufacturer.trim();
            if (/[^a-zA-Z]/.test(manufacturer)) {
                const error = {
                    message: 'Manufacturer field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!model) {
            const error = {
                message: 'Specify the model of the vehicle'
            };
            errors.push(error);
        }

        if (model) {
            model = model.trim();
            if (/[^a-zA-Z]/.test(model)) {
                const error = {
                    message: 'Model field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!bodytype) {
            const error = {
                message: 'You will need to specify a bodytype'
            };
            errors.push(error);
        }

        if (bodytype) {
            bodytype = bodytype.trim();
            if (/[^a-zA-Z]/.test(bodytype)) {
                const error = {
                    message: 'Bodytype field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!imageurl) {
            const error = {
                message: 'Please upload an image for this vehicle'
            };
            errors.push(error);
        }


        // if(imageurl){
        //     imageurl = imageurl.trim().replace(/\s\s+/g, '');
        //     imageurl = imageurl.split('.');
        //     const validImage = imageurl[imageurl.length - 1];
        //     if(validImage.toLowerCase() !== 'jpg' && validImage.toLowerCase() !== 'jpeg' && validImage.toLowerCase() !== 'png' && validImage.toLowerCase() !== 'gif') {
        //         const error = {
        //             message: 'This image is not a valid image'
        //         };
        //         errors.push(error)
        //     }
        // }

        if (errors.length) {
            return res.status(400).json({
                status: 400,
                errors: {
                    body: errors.map(err => err.message)
                }
            });
        }



        //console.log('errors', errors);
        req.body.state = state.toLowerCase().trim();
        req.body.price = price;
        req.body.manufacturer = manufacturer.toLowerCase();
        req.body.model = model.toLowerCase();
        req.body.bodytype = bodytype.toLowerCase();
        //req.authData;
        return next();
    }
  /**
   * Fetch Specific Car On to the application
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message.
   */
    static findSpecificCarAd(req, res, next) {
        const { id } = req.params;
        const value = Number(id);
        // if (value === NaN || value === 0) {
        //     return 'Invalid search entry'
        // }
        const foundCar = cars.find(car => car.id === value);
        if (!foundCar) {
            return res.status(404).json({
                status: 404,
                error: 'Car not found'
            });
        }
        req.body.foundCar = foundCar;
        return next();
    }
}



//  static async checkUndefinedPass(request, response, next) {
//     const { password } = request.body;
//     const errors = [];
//     if (password === undefined) {
//       const error = {
//         message: 'Please add a password field'
//       };
//       errors.push(error);
//       return response.status(400).json({
//         errors: { body: errors.map(err => err.message) }
//       });
//     }
//     request.body.password = password.trim();
//     next();
//   }

