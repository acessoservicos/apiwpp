'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2'); 
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const RESPONSIBLE_AREA = require('../enums/occurrenceTypes/responsibleArea');
const OCCURRENCE_TYPES = require('../enums/occurrenceTypes/registrationTeam');

const schema = new Schema ({
    condominium: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Condominium",
        required: true
    },
    
    openingDescription: {
        type: String,
        required: true
    },

    closingDescription: {
        type: String
    },

    openingDate: {
        type: Date,
        required: true
    },

    closingDate: {
        type: Date
    },

    openingResponsible: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "WebUser",
        required: true
    },

    closingResponsible: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "WebUser"
    },

    responsibleArea: {
        type: Number,
        enum: enumHelper.getEnumValues(RESPONSIBLE_AREA)
    },

    occurrenceType: {
        type: Number,
        enum: enumHelper.getEnumValues(OCCURRENCE_TYPES)
    },

    properties: {
        type: Object,
        required: true
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('Occurrence', schema).paginate().then({});

module.exports = mongoose.model('Occurrence', schema);