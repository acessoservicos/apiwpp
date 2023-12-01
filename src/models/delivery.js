'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const DELIVERY = require('../enums/delivery');

const schema = new Schema({
    deliveryDateTime:{
        type: Date,
        required: true
    },

    withdrawalDateTime:{
        type: Date
    },

    withdrawalDescription:{
        type: String
    },

    sender:{
        type: String,
        required: true
    },

    recipient:{
        type: String,
        required: true
    },

    apartment:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Apartment',
        required: true
    },

    condominium:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Condominium',
        required: true
    },

    resident:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Resident',
        required: true
    },

    deliveryDescription:{
        type: String,
        required: true
    },

    photo:{
        type: String,
    },

    codeWithdrawal:{
        type: String,
        required: true,
        unique: true
    },

    status:{
        type: Number,
        enum: enumHelper.getEnumValues(DELIVERY),
        default: DELIVERY.WAITING,
        required: true
    }
});

module.exports = mongoose.model('Delivery', schema);