'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },

    dropId: {
        type: String,
        default: null,
        required: false
    },

    condominium: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Condominium",
        required: true,
        index: true
    },
});

module.exports = mongoose.model('Block', schema);