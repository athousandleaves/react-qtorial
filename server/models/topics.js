const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
name: String,
image: String,
description: String,
tutorials: Array
});

//assign this Schema to a variable
const topics = mongoose.model("topic", topicSchema);

module.exports = topics;