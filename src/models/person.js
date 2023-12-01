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
        required: false,
        default: false
    },
    photo: {
        data: Buffer,
        contentType: String,
        //type: Buffer,
        required: false
    },

    bornDate: {
        type: Date,
        required: false
    },

    email: {
        type: String,
        unique: false,
        required: false
    },

    phone: {
        type: String,
        required: false
    },

    residentialPhone: {
        type: String,
        required: false
    },

    photoUrl: {
        type: String
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Person', schema);