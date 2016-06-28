
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  id: String,
  title: String,
  body: String,
  tag: String,
  timestamp: Date,
  user: String

});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;