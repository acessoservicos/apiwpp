'use strict'

const mongoose = require('mongoose');
const Condominium = mongoose.model('Condominium');

exports.find = async (query, select = null) => {
    try {
        let condominiums = await Condominium.find(query).select({ _id: 1, name: 1 });
        return condominiums;
    } catch (error) {
        return error.message;
    }
};