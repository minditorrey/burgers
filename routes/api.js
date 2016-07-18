'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/linda', require('./linda'));
router.use('/bob', require('./bob'));
router.use('/louise', require('./louise'));
router.use('/tina', require('./tina'));
router.use('/gene', require('./gene'));

module.exports = router;