/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Poll = require('../api/poll/poll.model');

Thing.find({}).remove(function() {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});

Poll.find({}).remove(function() {
  Poll.create({
    question: "How do you get to work?",
    dataType: "text",
    comments: [],
    votes: [2,16,28,7],
    responses: [
      "Drive a car I own.",
      "Bus/Max",
      "Bike",
      "Other"
    ]
  }, {
    question: "What kind of activity do you enjoy the most?",
    dataType: "text",
    comments: [],
    votes: [23,13,3,176],
    responses: [
      "Running",
      "Basketball",
      "Biking",
      "Swimming"
    ]
  }, {
    question: "What kind of snacks do you get at the movies?",
    dataType: "text",
    comments: [],
    votes: [23,13,3,1,5,2],
    responses: [
      "Popcorn",
      "Candy",
      "Soda",
      "Beer",
      "Hot Dog",
      "Pizza"
    ]
  },{
    question: "How often do you shower?",
    dataType: "text",
    comments: [],
    votes: [23,13,3,1,5,2],
    responses: [
      "Once a day",
      "twice a day or more",
      "Once a week",
      "Once a month",
      "Once a year or more",
      "What is a shower?",
    ]
  });
})
