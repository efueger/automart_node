import validator from 'validatorjs';
import { users }  from '../datastore';

/**
 * Class representing user validations
 * @class User
 */

 export class User {
     /**
      * @param {object} req - The request object
      * @param {object} res - The response oject
      * @param {function} next 
      * @returns {object} JSON representing the failure message
      */
     static registerCheck(req, res, next) {
         let { email, firstname, lastname, password, address } = req.body;

         const rules = {
            email: 'required|email|min:10|max:30',
            firstname: 'required|min:2|max:20|alpha',
            lastname: 'required|min:2|max:20|alpha',
            password: 'required|min:6|max:16',
            address: 'required'
         };
         
         const validation = new validator(req.body, rules);

         if (validation.fails()) {
             return res.status(400).json({
                 status: 400,
                 error: validation.errors.errors
             });
         }
         email = email.toLowerCase().trim();
         const emailFound = users.find(user => user.email === email);
         if (emailFound) {
             return res.status(409).json({
                 status: 409,
                 error: 'Email in use already'
             });
         }
         req.body.eamil = email;
         req.body.firstname = firstname.toLowerCase().trim();
         req.body.lastname = lastname.toLowerCase().trim();
         req.body.password = password.trim();
         req.body.address = address.trim();
         return next();
     }

  /**
   * login User to the application
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message.
   */
  static loginCheck(req, res, next) {
    let { email, password } = req.body;

    const rules = {
      email: 'required|email',
      password: 'required'
    };
    const validation = new validator(req.body, rules);

    if (validation.fails()) {
      return res.status(400).json({
        status: 400,
        error: validation.errors.errors
      });
    }

    email = email.toLowerCase().trim();
    const userFound = users.find(user => user.email === email);
    if (!userFound) {
      return res.status(401).json({
        status: 401,
        error: 'Authentication failed',
      });
    }

    password = password.trim();
    if (userFound && password !== userFound.password) {
      return res.status(401).json({
        status: 401,
        error: 'Incorrect login details',
      });
    }
    req.body.userFound = userFound;
    req.body.password = password;
    return next();
  }
 };