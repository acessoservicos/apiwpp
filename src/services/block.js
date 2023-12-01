'use strict'

const repository = require('../repositories/block');

exports.findById = async (id) => {
    let block = repository.find({ _id: id });
    return block;
};