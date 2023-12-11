'use strict'

const repository = require('../repositories/servicePoint');

const condominiumService = require('./condominium');
const personService = require('./person');

exports.findByCondominium = async (condominium) => {
    let condominiumInfo = await condominiumService.findById(condominium);

    if (!condominiumInfo[0]._id) {
        condominium = condominium.substring(3);
        condominium = await condominiumService.findByName(condominium);
    };

    let servicePoints = await repository.find();

    let servicePointCondominium = [];

    for (let servicePoint of servicePoints) {
        let condominiumServicePoint = servicePoint.condominiums.filter((cond) => cond == condominium[0].id);
        if (condominiumServicePoint.length > 0) {
            servicePointCondominium.push(servicePoint);
        }
    };

    return servicePointCondominium[0];
};

exports.findByPerson = async (phone) => {
    let person = await personService.findPersonByPhone(phone);

    if (!person) {
        return 613;
    }
    
    let condominium = await condominiumService.findCondominiumByPerson(person);

    let servicePoint = await this.findByCondominium(condominium);

    return servicePoint.voipId;
};