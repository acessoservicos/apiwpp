'use strict'

const repository = require('../repositories/person');

exports.findPersonByPhone = async (phone) => {
    let ddd = phone.substring(0,2);
    let phoneFormated = ddd + 9 + phone.substring(2);
    let person = await repository.find({ phone: phoneFormated });
    return person;
};

exports.findPersonByCpf = async (cpf) => {
    let person = await repository.find({ cpf: cpf });
    return person;
};