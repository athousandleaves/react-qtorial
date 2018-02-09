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
  });

  router.get("/topics/:id", function(req, res) {
    // find topic and populate tutorials associated with it
    topics
      .findById(req.params.id)
      .populate("tutorials")
      .exec(function(err, foundTopic) {
        if (err) {
          console.log(err);
        } else {
          tutorials.find({ topic: foundTopic.name }, function(err, alltutorials) {
            if (err) {
              console.log(err);
            } else {
              res.json({
                topic: foundTopic,
                tutorials: alltutorials
              });
            }
          });
        }
      });
  });

  module.exports = router;