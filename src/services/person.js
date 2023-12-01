'use strict'

const repository = require('../repositories/person');

exports.findPersonByPhone = async (phone) => {
    let person = await repository.find({ phone: phone });
    return person.name.split(' ')[0];
};