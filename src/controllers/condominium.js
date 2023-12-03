'use strict'

const HttpStatusCodes = require('http-status-codes');
const service = require('../services/condominium');

exports.findCondominiumByPerson = async (req, res) => {
    try {
        let condominium = await service.findCondominiumByPerson(req.params.id);
        res.status(HttpStatusCodes.StatusCodes.OK).send(condominium);
    } catch (error) {
        res.status(HttpStatusCodes.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};