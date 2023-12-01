'use strict'

const HttpStatusCodes = require('http-status-codes');
const service = require('../services/person');

exports.findPersonByPhone = async (req, res) => {
    try {
        let person = await service.findPersonByPhone(req.params.phone);
        res.status(HttpStatusCodes.StatusCodes.OK).send(person);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};