'use strict'

const mongoose = require('mongoose');
const Condominium = mongoose.model('Condominium');

exports.find = async (query, select = {_id: 1, name: 1}) => {
    try {
        let condominiums = await Condominium.find(query).select(select);
        return condominiums;
    } catch (error) {
        return error.message;
    }
};