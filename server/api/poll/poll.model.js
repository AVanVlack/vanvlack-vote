'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  responsesType: String,
  responsesData: String,
  question: String,
  responses: Array,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: Array,
  comments: [{date:{ type: Date, default: Date.now }, author: String, comment: String}],
  creationDate: { type: Date, default: Date.now },
});

PollSchema.statics = {
  loadRecent: function(cb) {
    this.find({})
      .sort('-creationDate')
      .limit(20)
      .exec(cb);
  },
  loadUsers: function(id, cb) {
    this.find({ author: id })
      .sort('-creationDate')
      .exec(cb);
  }
};

module.exports = mongoose.model('Poll', PollSchema);
