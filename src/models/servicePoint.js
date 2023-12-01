'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },  

    operators: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "WebUser",
        default: [],
        required: true
    },

    condominiums: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Condominium",
        default: [],
        required: true
    },

    voipId: {
        type: Number
    },

    wppPhone: {
        type: String
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('ServicePoint', schema);