'use strict'

const repository = require('../repositories/resident');

exports.findResidentByPerson = async (person) => {
    let resident = await repository.find({ person: person });
    return resident[0];
};