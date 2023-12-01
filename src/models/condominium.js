'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enumHelper = require('../helpers/enumHelper');
const CONDO_INSTALLATION_STATUS_ENUM = require('../enums/condoInstallationStatus');
const CONDOMINIUM_CONTRACT = require('../enums/condominiumContract');
const CONDOMINIUM_INTERNET = require('../enums/condominiumInternet');
const CONDOMINIUM_READER = require('../enums/condominiumReader')

const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },

    corporateName: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    number: {
        type: String, //String, para casos como S/N ou outro valor
        required: true
    },

    complement: {
        type: String,
        required: false
    },

    neighbourhood: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    cep: {
        type: String,
        required: true
    },

    // Local e perímetro criados de acordo com a documentação: https://mongoosejs.com/docs/geojson.html
    location: {
        type: { type: String, enum: ["Point"], required: true},
        coordinates: { type: [Number], required: true },
        //required: false
    },

    perimeter: {
        type: { type: String, enum: ["Polygon"], required: false },
        coordinates: { type: [[Number]], required: false },
        required: false
    },

    startDate: {
        type: Date,
        required: false
    },

    installationDate: {
        type: Date,
        required: true
    },

    contractSignatureDate: {
        type: Date,
        required: true
    },

    lobbyPhone: {
        type: String,
        required: true
    },

    installationStatus: {
        type: Number,
        enum: enumHelper.getEnumValues(CONDO_INSTALLATION_STATUS_ENUM),
        default: CONDO_INSTALLATION_STATUS_ENUM.NEW,
        required: true
    },

    //alteraçao provisoria até implantar validação no frontend
    cnpj: {
        type: String,
        unique: true,
        required: false
    },

    //alteraçao provisoria até implantar validação no frontend
    gpsMetersRange: {
        type: Number,
        required: false
    },

    dropId: {
        type: String,
        default: null,
        required: false
    },

    dropUsername: {
        type: String,
        required: false
    },

    dropPassword: {
        type: String,
        required: false
    },

    condominiumContract: {
        type: Number,
        enum: enumHelper.getEnumValues(CONDOMINIUM_CONTRACT),
        default: CONDOMINIUM_CONTRACT.ACESSO_SERVIÇOS,
        required: true
    },

    automation: {
        type: Boolean,
        default: false,
        required: true
    },

    zelo: {
        type: Boolean,
        default: false,
        required: true
    },

    internet: {
        type: Number,
        enum: enumHelper.getEnumValues(CONDOMINIUM_INTERNET),
        default: CONDOMINIUM_INTERNET.LAB,
        required: true
    },

    reader: {
        type: Number,
        enum: enumHelper.getEnumValues(CONDOMINIUM_READER),
        default: CONDOMINIUM_READER.FACIAL,
        required: true
    },

    concierge: {
        type: Boolean,
        default: false,
        required: true
    },
    
    ipNumber: {
        type: String
    },

    inlineId: {
        type: String,
        required: false
    }
});

schema.index({
    location: "2dsphere"
}); // Necessário para cálculo de distâncias

/*
Referências:
https://medium.com/@galford151/mongoose-geospatial-queries-with-near-59800b79c0f6
https://docs.mongodb.com/manual/reference/operator/query/near/
https://docs.mongodb.com/manual/core/2dsphere/
https://stackoverflow.com/questions/23188875/mongodb-unable-to-find-index-for-geonear-query
*/

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Condominium', schema);