const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'my_secret_key');
    req.userData = decoded;
    next();
  } catch (error) {
    // 401: unauthenticated
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}
/*
const jwt = require('express-jwt'),
      secret = require('../configs').secret
const getTokenFromHeader = req => {
     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' || req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
       return req.headers.authorization.split(' ')[1]
     }
     return null
}
const auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
}
module.exports = auth */