var mongoose = require("mongoose"),
    bcrypt   = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  created: { type: Date, default: Date.now },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutorial"
    }
  ]
});

UserSchema.pre('save', function(next) {
  const { password } = this;
  bcrypt.hash(password, 10, (err, hash) => {
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);