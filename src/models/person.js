'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    name: {
        type: String,
        required: true
    },

    normalizedName: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        unique: true,
        required: true,
        sparse: true
    },

    foreign: {
        type: Boolean,
        default: false
    },
    photo: {
        data: Buffer,
        contentType: String,
    },

    bornDate: {
        type: Date,
    },

    email: {
        type: String,
        unique: false,
    },

    phone: {
        type: String,
    },

    residentialPhone: {
        type: String,
    },

    photoUrl: {
        type: String
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Person', schema);