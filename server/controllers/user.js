import { users } from '../datastore';
import { createToken } from '../middlewares/auth';

/**
 * Class representing UserController
 * @class UserController
 */
export class UserController {
  /**
     * Create user account on the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
     */
  static register(req, res) {
    const {
      email, firstname, lastname, password, address
    } = req.body;
    const newUser = {
      id: users.length + 1,
      email,
      firstname,
      lastname,
      password,
      address
    };
    users.push(newUser);
    const token = createToken(newUser);
    return res.status(201).json({
      status: 201,
      data: { token }
    });
  }

  /**
     * Login user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
     */
  static login(req, res) {
    const { userFound } = req.body;
    const token = createToken(userFound);
    return res.status(200).json({
      status: 200,
      data: { token }
    });
  }
}