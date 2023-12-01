'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/person');

router.get('/:phone', controller.findPersonByPhone);

module.exports = router;