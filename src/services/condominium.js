'use strict'

const repository = require('../repositories/condominium');

const residentService = require('../services/resident');
const apartmentService = require('../services/apartment');
const floorService = require('../services/floor');
const blockService = require('../services/block');

exports.findCondominiumByPerson = async (person) => {
    // let resident = await residentService.findResidentByPerson(person);

    // let apartments = [];
    // for (let apartment of resident.apartments) {
    //     apartments.push(await apartmentService.findById(apartment._id));
    // };

    // let floors = [];
    // for (let apartment of apartments) {
    //     floors.push(await floorService.findById(apartment[0].floor))
    // };

    // let blocks = [];
    // for (let floor of floors) {
    //     blocks.push(await blockService.findById(floor[0].block));
    // }

    // let condominiums = [];
    // for (let block of blocks) {
    //     condominiums.push(await this.findById(block[0].condominium));
    // }

    // return [].concat(...condominiums);
    const resident = await residentService.findResidentByPerson(person);

    const condominiums = await Promise.all(
        resident.apartments.map(async (apartment) => {
            const apartmentDetails = await apartmentService.findById(apartment._id);
            const floorDetails = await floorService.findById(apartmentDetails[0].floor);
            const blockDetails = await blockService.findById(floorDetails[0].block);
            const condominiumDetails = await this.findById(blockDetails[0].condominium);

            return condominiumDetails;
        })
    );

    for (let index = 0; index < condominiums.length; index++) {
        condominiums[index][0].name = `${index + 1}- ${condominiums[index][0].name}`;
    };

    return [].concat(...condominiums);
};

exports.findById = async (id) => {
    let condominium = await repository.find({ _id: id });
    return condominium;
};

exports.findByName = async (name) => {
    let condominium = await repository.find({ name: name });
    return condominium;
};