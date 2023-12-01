'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
        type: Number,
        required: true
    },
    extension: {
        type: Number,
        required: false
    },
    dropId: {
        type: String,
        default: null,
        required: false,
        unique: true
    },
    label: {
        type: String,
        default: null,
        required: false
    },
    observation: {
      type: String,
      default: null,
      required: false
    },
    floor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Floor",
        required: true,
        index: true
    },
});

module.exports = mongoose.model('Apartment', schema);