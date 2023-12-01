'use strict'

const mongoose = require('mongoose');
const Resident = mongoose.model('Resident');

exports.find = async (query, select) => {
    try {
        let resident = await Resident.find(query).select(select);
        return resident;
    } catch (error) {
        return error.message;
    }
};