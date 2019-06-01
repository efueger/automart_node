import { orders } from '../datastore';

/**
 * Class representing user validations
 * @class Order
 */

export class Order{

    /**
    * @param {object} req - The request object
    * @param {object} res - The response oject
    * @param {function} next 
    * @returns {object} JSON representing the failure message
    */

    static postOrderChecker(req, res, next) {
        let { priceOffered } = req.body;
        const errors = [];

        priceOffered = priceOffered.trim();
        if(!priceOffered) {
            const error = {
                message: 'please specify an amount'
            };
            errors.push(error);
        }

        if(!/^\d+$/.test(priceOffered)) {
            const error = {
                message: 'price offered should be numbers only'
            };
            errors.push(error);
        }

        if(errors.length) {
            return res.status(400).json({
                status: 400,
                errors: {
                    body: errors.map(err => err.message)
                }
            });
        }

        req.body.priceOffered = priceOffered;
        next();
    }
}