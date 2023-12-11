'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/servicePoint');

router.get('/person/:phone', controller.findByPerson);
router.get('/condominium/:name', controller.findByCondominium);

module.exports = router;