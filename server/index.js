require('dotenv').config();

const app = require('express')(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  tutorials = require("./routes/tutorials");

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(tutorials);

console.log(process.env.PORT);
var url = process.env.DATABASEURL;
mongoose.connect(url);

app.listen(process.env.PORT, () => console.log('listening'));