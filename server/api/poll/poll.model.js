'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  type: String,
  dataType: String,
  question: String,
  responses: Array,
  author: String,
  votes: Array,
  comments: [{date:{ type: Date, default: Date.now }, author: String, comment: String}],
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Poll', PollSchema);