var jwt = require('jsonwebtoken');
var config = require('../config');

function ensureUser(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    if (decoded && decoded.id === req.params.id) {
      next();
    } else {
      res.status(401).json({message: 'Unauthorized'});
    }
    
  });
}

module.exports = ensureUser;
