'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/person');

router.get('/findByPhone/:phone', controller.findPersonByPhone);
router.get('/findByCpf/:cpf', controller.findPersonByCpf);

module.exports = router;