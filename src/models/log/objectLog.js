'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');
const enumHelper = require('../../helpers/enumHelper');
const OBJECT_CREATION_ENUM = require('../../enums/objectIdentification');

const schema = new Schema({

    objectId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    },

    identification: {
        type: Number,
        enum: enumHelper.getEnumValues(OBJECT_CREATION_ENUM),
        required: false
    },

    // Propriedade não usada mais
    creationDate: {
        type: mongoose.SchemaTypes.Date,
        required: false
    },

    // Propriedade não usada mais
    updateDate: {
        type: mongoose.SchemaTypes.Date,
        required: false
    },

    date: {
        type: mongoose.SchemaTypes.Date,
        required: false
    },

    webUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'WebUser',
        required: false
    },

    object: {
        type: Object,
        required: false
    },

    // Propriedade não usada mais
    objectAfter: {
        type: Object,
        required: false
    },
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('ObjectLog', schema);