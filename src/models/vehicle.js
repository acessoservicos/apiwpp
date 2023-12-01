'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    plate: {
        type: String,
        required: true,
        unique: true
    },

    color: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Vehicle', schema);