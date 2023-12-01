'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    gate: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Resource',
        required: true
    },

    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false
    },

    resident: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Resident',
        required: false
    },

    webUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'WebUser',
        required: false
    },

    date: {
        type: mongoose.SchemaTypes.Date,
        required: true
    },

    location: {
        type: { type: String, enum: ["Point"], require: true },
        coordinates: { type: [Number], required: true },
        required: false
    },

    status: {
        type: String,
        required: true
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('GateLog', schema);