'use strict'

const repository = require('../repositories/apartment');

exports.findById = async (id) => {
    let apartment = await repository.find({ _id: id });
    return apartment;
};