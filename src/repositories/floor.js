'use strict'

const mongoose = require('mongoose');
const Floor = mongoose.model('Floor');

exports.find = async (query, select) => {
    try {
        let floor = await Floor.find(query).select(select);
        return floor;
    } catch (error) {
        return error.message;
    }
};