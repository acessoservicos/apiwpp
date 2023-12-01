'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../../helpers/enumHelper');
const DELIVERY_STATUS_ENUM = require('../../enums/deliveryStatus');

const schema = new Schema({
    dropDeliveryId: {
        type: String,
        required: true
    },

    apartment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Apartment',
        required: true
    },

    deliveryDateTime: {
        type: Date,
        default: null
    },

    warningDateTime: {
        type: Date,
        required: true
    },

    withdrawalDateTime: {
        type: Date
    },

    lateDateTime: {
        type: Date,
        required: true
    },

    withdrawalCode: {
        type: String,
        required: true
    },

    status: {
        type: Number,
        enum: enumHelper.getEnumValues(DELIVERY_STATUS_ENUM),
        required: true,
        default: DELIVERY_STATUS_ENUM.WAITING
    },
});

module.exports = mongoose.model('DropDelivery', schema);