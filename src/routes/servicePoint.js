'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/servicePoint');

router.get('/person/:phone', controller.findByPerson);

module.exports = router;