'use strict'

const repository = require('../repositories/servicePoint');

exports.findByCondominium = async (condominium) => {
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