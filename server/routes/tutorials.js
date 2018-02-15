const router = require('express').Router(),
  topics = require('../models/topics.js'),
  tutorials = require('../models/tutorials.js');
  comments = require('../models/comments.js');

router.get("/topics", function (req, res) {
  topics.find({}, function (err, allTopics) {
    if (err) {
      console.log(err);
    } else {
      console.log(allTopics);
      res.json(allTopics);
    }
  })
});

router.get("/tutorials", function (req, res) {
  tutorials.find({}, function (err, allTutorials) {
    if (err) {
      console.log(err);
    } else {
      console.log(allTutorials);
      res.json(allTutorials);
    }
  })
});

router.get("/topics/:id", function (req, res) {
  // find topic and populate tutorials associated with it
  topics
    .findById(req.params.id)
    .populate("tutorials")
    .exec(function (err, foundTopic) {
      if (err) {
        console.log(err);
      } else {
        tutorials.find({ topic: foundTopic.name }, function (err, alltutorials) {
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

// SHOW - shows more info about one tutorial
router.get("/tutorials/:id", function (req, res) {
  tutorials
    .findById(req.params.id)
    .populate("comments")
    .exec(function (err, foundTutorial) {
      if (err) {
        console.log(err);
      } else {
        res.json(foundTutorial);
      }
    });
});

module.exports = router;