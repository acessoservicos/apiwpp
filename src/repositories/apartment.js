'use strict'

const mongoose = require('mongoose');
const Apartment = mongoose.model('Apartment');

exports.find = async (query, select = null) => {
    try {
        let apartment = await Apartment.find(query).select(select);
        return apartment;
    } catch (error) {
        return error.message;
    }
};