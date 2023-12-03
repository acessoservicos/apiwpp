'use strict'

const HttpStatusCodes = require('http-status-codes');

const service = require('../services/servicePoint');

exports.findByPerson = async (req, res) => {
    try {
        let servicePoint = await service.findByPerson(req.params.phone);
        res.status(HttpStatusCodes.StatusCodes.OK).send({servicePoint});
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};