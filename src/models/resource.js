'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    condominium: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Condominium',
        required: true
    },

    resourceType: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'ResourceType',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    properties: {
        type: Object,
        required: true
    },

 
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Resource', schema);