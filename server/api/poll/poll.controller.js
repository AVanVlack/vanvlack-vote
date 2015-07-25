'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.json(200, polls);
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.send(404); }
    return res.json(poll);
  });
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.json(201, poll);
  });
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.send(404); }
    res.send(200)
    var updated = _.merge(poll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, poll);
    });
  });
};

// Updates a poll in the DB by adding a vote from auth user.
exports.vote = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  //check if they have voted
  if (req.user.votedPolls.indexOf(req.parms) === -1){
    //add the aqual vote to the poll.

    Poll.findById(req.params.id, function (err, poll) {
      if (err) { return handleError(res, err); }
      if(!poll) { return res.send(404); }
      poll.votes[poll.responses.indexOf(req.body.vote)] += 1;
      poll.markModified('votes');
      poll.save(function (err) {
        if (err) { return handleError(res, err);}
        return res.json(200, poll);
      });
    });
    //add poll to users voted polls.
    req.user.votedPolls.push(req.params.id)
    req.user.save(function(err) {
      //send somthing back?
    });
  }
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.send(404); }
    poll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
