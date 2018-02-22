const router      = require("express").Router(),
      request     = require('request'),
      topics      = require("../models/topics.js"),
      tutorials   = require("../models/tutorials.js");
      comments    = require("../models/comments.js");
      verifyToken = require("./verifytoken");

router.get("/topics", function(req, res) {
  topics.find({}, function(err, allTopics) {
    if (err) {
      console.log(err);
    } else {
      res.json(allTopics);
    }
  });
});

router.get("/tutorials", function(req, res) {
  tutorials.find({}, function(err, allTutorials) {
    if (err) {
      console.log(err);
    } else {
      res.json(allTutorials);
    }
  });
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

// SHOW - shows more info about one tutorial
router.get("/tutorials/:id", function(req, res) {
  tutorials
    .findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundTutorial) {
      if (err) {
        console.log(err);
      } else {
        res.json(foundTutorial);
      }
    });
});

// POST - post a new tutorial
router.post("/tutorials", function(req, res) {
  var name = "";
  var thumbnail = "";
  var description = "";
  var videoID = req.body.videoID;
  var topic = req.body.topic;
  var author = {
    id: req.body.id,
    username: req.body.username
  };
  var parsedObj;
  var APIkey = process.env.APIKEY;


  request(
    "https://www.googleapis.com/youtube/v3/videos?id=" +
      videoID +
      "&part=snippet&key=" +
      APIkey,
    function(err, response, body) {
      if (err) {
        console.log(err);
      } else {
        var parsedObj = JSON.parse(body);
        var name = parsedObj.items[0].snippet.title;
        var description = parsedObj.items[0].snippet.description;

        // find the correct thumbnail url
        if (parsedObj.items[0].snippet.thumbnails.maxres) {
          var thumbnail = parsedObj.items[0].snippet.thumbnails.maxres.url;
        } else if (parsedObj.items[0].snippet.thumbnails.standard) {
          var thumbnail = parsedObj.items[0].snippet.thumbnails.standard.url;
        } else if (parsedObj.items[0].snippet.thumbnails) {
          var thumbnail = parsedObj.items[0].snippet.thumbnails.high.url;
        }
      }
      // make a new object as a second step
      var newtutorial = {
        name: name,
        thumbnail: thumbnail,
        videoID: videoID,
        description: description,
        topic: topic,
        author: author
      };
      // Create a new tutorial and save it to the DB
      tutorials.create(newtutorial, function(err, newlyCreated) {
        if (err) {
          console.log(err);
        } else {
          console.log(newlyCreated);
          res.json(newlyCreated);
        }
      });
    })
});

// EDIT tutorial route
router.get("/tutorials/:id/edit", function(req, res) {
  tutorials.findById(req.params.id, function(err, foundtutorial) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundtutorial);
      res.json(foundtutorial);
    }
  });
});

// UPDATE tutorial route
router.put("/tutorials/:id", function(req, res) {
  //find and update correct tutorial
  tutorial.findByIdAndUpdate(req.params.id, req.body.tutorial, function(err, updatedtutorial) {
    if (err) {
      console.log(err);
    } else {
      res.json(updatedtutorial);
    }
  });
});

module.exports = router;
