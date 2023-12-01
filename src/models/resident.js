'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const REGISTER_STATUS_ENUM = require('../enums/registerStatus');
const RESIDENT_TYPE_ENUM = require('../enums/residentType');
const APP_STATUS_ENUM = require('../enums/appStatus');

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Person",
        required: true
    },

    // https://stackoverflow.com/questions/22244421/how-to-create-mongoose-schema-with-array-of-object-ids
    apartments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Apartment",
        required: true
    }],

    apartmentsResidentType: {
        type: Object,
        required: true
    },

    registerStatus: {
        type: Number,
        enum: enumHelper.getEnumValues(REGISTER_STATUS_ENUM),
        required: true,
        default: REGISTER_STATUS_ENUM.ACTIVE
    },

    residentType: {
        type: Number,
        enum: enumHelper.getEnumValues(RESIDENT_TYPE_ENUM),
        required: true,
        default: RESIDENT_TYPE_ENUM.OWNER
    },

    password: {
        type: String,
    },

    dropId: {
        type: String,
        default: null,
    },

    appStatus: {
        type: Number,
        enum: enumHelper.getEnumValues(APP_STATUS_ENUM),
        required: true,
        default: APP_STATUS_ENUM.NOT_ENABLED
    },

    vehicles: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Vehicle",
        required: true,
        default: []
    }],

    garages: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Garage",
        required: true,
        default: []
    }],

    expirationDate: {
        type: Date
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Resident', schema);