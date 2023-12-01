'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const REGISTER_STATUS_ENUM = require('../enums/registerStatus');
const USER_PROFILE_ENUM = require('../enums/userProfile');

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({

    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Person',
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    userProfile: {
        type: Number,
        required: true,
        enum: enumHelper.getEnumValues(USER_PROFILE_ENUM),
        default: USER_PROFILE_ENUM.OPERATOR
    },

    registerStatus: {
        type: Number,
        required: true,
        enum: enumHelper.getEnumValues(REGISTER_STATUS_ENUM),
        default: REGISTER_STATUS_ENUM.ACTIVE
    },    

    condominium: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Condominium',
        required: false
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('WebUser', schema);