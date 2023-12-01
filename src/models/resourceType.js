'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const RESOURCE_CLASS_ENUM = require('../enums/resourceClass');

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    propertyList: {
        type: Object,
        required: false
    },

    resourceClass: {
        type: Number,
        enum: enumHelper.getEnumValues(RESOURCE_CLASS_ENUM),
        required: true
    },
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('ResourceType', schema);