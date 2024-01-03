'use strict'

const repository = require('../repositories/person');

exports.findPersonByPhone = async (phone) => {
    let phoneFormated;

    if (phone.length < 11) {
        let ddd = phone.substring(0,2);
        phoneFormated = ddd + 9 + phone.substring(2);
    }

    if (phone.substring(0,2) == '55') {
        phoneFormated = phone.substring(2);
    }
    
    let person = await repository.find({ phone: phoneFormated?phoneFormated:phone });
    return person;
};

exports.findPersonByCpf = async (cpf) => {
    let person = await repository.find({ cpf: cpf });
    return person;
};