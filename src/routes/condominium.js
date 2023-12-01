'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/condominium');

router.get('/person/:id', controller.findCondominiumByPerson);

module.exports = router;