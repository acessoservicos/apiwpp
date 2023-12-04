'use strict'

const mongoose = require('mongoose')
const Person = mongoose.model('Person');

exports.find = async (query, select = {_id: 1, name: 1}) => {
    try {
        let person = await Person.find(query).select(select);
        person[0].name = person[0].name.trim().split(" ")[0];
        return person[0];
    } catch (error) {
        return error.message;
    }
};