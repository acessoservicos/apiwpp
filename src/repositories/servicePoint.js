'use strict'

const mongoose = require('mongoose');
const ServicePoint = mongoose.model('ServicePoint');

exports.find = async (query, select = null) => {
    try {
        let servicePoint = await ServicePoint.find(query).select(select);
        return servicePoint;
    } catch (error) {
        return error.message;
    }
};