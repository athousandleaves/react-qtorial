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
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          //save comment
          comment.save();
          tutorial.comments.push(comment);
          tutorial.save();
          res.redirect("/tutorials/" + tutorial._id);
        }
      });
    }
  });
});

module.exports = router;