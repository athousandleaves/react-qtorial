const router      = require("express").Router(),
      tutorial    = require("../models/tutorials.js"),
      Comment     = require("../models/comments.js");


router.post("/tutorials/:id/comments/", function(req, res) {
  // look up tutorial by ID
  tutorial.findById(req.params.id, function(err, tutorial) {
    if (err) {
      console.log(err);
      res.redirect("home");
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          //add username and id to comment
          comment.text = req.body.text;
          comment.author.id = req.body.id;
          comment.author.username = req.body.username;
          //save comment
          comment.save();
          tutorial.comments.push(comment);
          tutorial.save();
          res.json(comment);
        }
      });
    }
  });
});

module.exports = router;