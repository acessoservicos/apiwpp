'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idClient: {
        type: String,
        required: true
    },

    edge: {
        type: String,
        required: true
    },

    device: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },
    
    status: {
        type: String,
        required: true
    },
    
    dateTime: {
        type: Date,
        required: true
    },

    nameClient: {
        type: String,
        required: true
    },

    acessoMessage: {
        type: String
    }
});

module.exports = mongoose.model('InlineSensors', schema);