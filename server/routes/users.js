const router = require('express').Router(),
      User   = require('../models/users.js');

router.get("/user", function(req, res) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.log(err);
    } else {
      console.log(allUsers);
      res.json(allUsers);
    }
  });
});

router.post('/users', function(req, res) {
  var newUser = new User({username: req.body.username, password: req.body.password});
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      res.json(user);
    }
  }); 
})

module.exports = router;