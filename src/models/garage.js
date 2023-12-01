'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const GARAGE_ENUM = require('../enums/garageType');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: enumHelper.getEnumValues(GARAGE_ENUM),
        required: true,
        default: GARAGE_ENUM.GROUND_FLOOR
    }

});

module.exports = mongoose.model('Garage', schema);