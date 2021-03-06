const router      = require('express').Router(),
      jwt         = require('jsonwebtoken'),
      expressjwt  = require('express-jwt');
      bcrypt      = require('bcrypt'),
      config      = require('../config'),
      User        = require('../models/users.js'),
      verifyToken = require('./verifytoken');

router.get("/users", function(req, res) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
    } else {
      console.log(allUsers);
      res.json(allUsers);
    }
  });
});

router.get("/user/:id", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      res.json(foundUser);
    }
  });
});

router.post('/users', function(req, res) {
  var newUser = new User({username: req.body.username, password: req.body.password});
  User.create(newUser, function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      // create the token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
    }
    res.status(200).send({ auth: true, token: token, username: req.body.username, id: user._id })
  }); 
});

router.get('/me', verifyToken, function (req, res, next) {
  User.findById(req.userId,
    { password: 0 }, // project password for security
    function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      res.status(200).send(user);
  });
});

// router.use(function (req, res, next) {
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
//   if (!token)
//     return res.status(403).send({ auth: false, message: 'No token provided.' });
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err)
//     return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//     // if everything good, save to request for use in other routes
//     req.userId = decoded.id;
//     next();
//   });
// });

router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    console.log(user);
    res.status(200).send({ auth: true, token: token, username: req.body.username, id: user._id })
  });
});

router.post('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});


module.exports = router;