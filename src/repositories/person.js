'use strict'

const mongoose = require('mongoose')
const Person = mongoose.model('Person');

exports.find = async (query, select = {photo: 0, photoUrl: 0}) => {
    try {
        let person = await Person.find(query).select(select);
        return person[0];
    } catch (error) {
        return error.message;
    }
};