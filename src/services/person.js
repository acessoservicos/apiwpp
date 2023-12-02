'use strict'

const repository = require('../repositories/person');

exports.findPersonByPhone = async (phone) => {
    let person = await repository.find({ phone: phone });
    return person;
};

exports.findPersonByCpf = async (cpf) => {
    let person = await repository.find({ cpf: cpf });
    return person;
};