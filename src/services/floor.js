'use strict'

const repository = require('../repositories/floor');

exports.findById = async (id) => {
    let floor = await repository.find({ _id: id });
    return floor;
};