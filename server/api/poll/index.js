'use strict';

var express = require('express');
var controller = require('./poll.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/new', controller.getNew);
router.get('/user/:id', auth.isAuthenticated(), controller.getUsers)
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.update);
router.put('/vote/:id', auth.isAuthenticated(), controller.vote);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
