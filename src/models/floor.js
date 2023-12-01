'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number: {
        type: Number,
        required: true
    },

    apartments: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Apartment",
        default: [],
        required: true
    },
    block: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Block",
        required: true,
        index: true
    },
});

module.exports = mongoose.model('Floor', schema);