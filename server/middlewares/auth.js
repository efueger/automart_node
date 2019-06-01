import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { users, cars } from '../datastore';

dotenv.config();

export const createToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.SECRETKEY);
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization || req.body.token;
  //console.log('tokennitre', token);
  if (!token) {
    return res.status(403).json({
      status: 'Fail',
      mesage: 'No token supplied'
    });
  }
  jwt.verify(token, process.env.SECRETKEY, (error, authData) => {
    if (error) {
      if (error.message.includes('signature')) {
        return res.status(403).json({
          status: 'Fail',
          message: 'Invalid token supplied'
        });
      }
      return res.status(403).json({
        message: error
      });
    }
    req.authData = authData;
    return next();
  });
};

export const isAdmin = (req, res, next) => {
  const { isAdmin } = req.authData.payload;
  if (isAdmin === true) {
    return next();
  }
  
  return res.status(401).json({
    status: 401,
    error: 'You do not have permissions to acces this route'
  });
};

export const isAdminDummy = (req, res, next) => {
  const { email } = req.authData.payload;
  const findUser = users.find(user => user.email === email);
  if(findUser.isAdmin) {
    return next();
  }
  return res.status(401).json({
    status: 401,
    error: 'Permission denied'
  });
};

export const isOwnerDummy = (req, res, next) => {
  const { email } = req.authData.payload;
  const { id } = req.params;
  const value = Number(id);
  const foundUser = users.find(user => user.email === email);
  const foundCar = cars.find(car => car.id === value);
  if (foundUser.id !== foundCar.owner) {
    return res.status(401).json({
      status: 401,
      error: 'You can not edit this ad'
    });
  }
  return next();

}

