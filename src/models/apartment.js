'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
        type: Number,
        required: true
    },
    extension: {
        type: Number
    },
    dropId: {
        type: String,
        default: null,
        unique: true
    },
    label: {
        type: String,
        default: null
    },
    observation: {
      type: String,
      default: null
    },
    floor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Floor",
        required: true,
        index: true
    },
});

module.exports = mongoose.model('Apartment', schema);