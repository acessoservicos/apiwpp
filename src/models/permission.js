'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    condominium: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Condominium",
        required: true
    },

    resident: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Resident",
        required: true
    },

    isSyndic: {
        type: Boolean,
        required: true,
        default: false
    },

    isSubSyndic: {
      type: Boolean,
      required: true,
      default: false
    },

    isAdvisor: {
      type: Boolean,
      required: true,
      default: false
    },

    //Deve ser possível selecionar quais câmeras o morador poderá ver
    cameras: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Resource",
      required: false
    }],
    
    isJanitor: {
      type: Boolean,
      required: true,
      default: false
    },
    
    useSmartCabinet: {
      type: Boolean,
      required: true,
      default: false
    },

    observation: {
      type: String,
      required: false
    }
});

module.exports = mongoose.model('Permission', schema);