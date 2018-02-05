const router    = require('express').Router(),
      topics    = require('../models/topics.js'),
      tutorials = require('../models/tutorials.js');

  router.get("/topics", function (req, res) {
    topics.find({}, function(err, allTopics) {
      if(err) {
        console.log(err);
      } else {
        console.log(res.json(allTopics));
      }
    })
  });

  router.get("/tutorials", function (req, res) {
    tutorials.find({}, function(err, allTutorials) {
      if(err) {
        console.log(err);
      } else {
        console.log(res.json(allTutorials));
      }
    })
  })

  module.exports = router;