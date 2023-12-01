'use strict'

const mongoose = require('mongoose');
const Condominium = mongoose.model('Condominium');

exports.find = async (query, select = null) => {
    try {
        let condominiums = await Condominium.find(query).select(select);
        return condominiums;
    } catch (error) {
        return error.message;
    }
};