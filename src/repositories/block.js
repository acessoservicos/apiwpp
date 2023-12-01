'use strict'

const mongoose = require('mongoose');
const Block = mongoose.model('Block');

exports.find = async (query, select) => {
    try {
        let block = await Block.find(query).select(select);
        return block;
    } catch (error) {
        return error.message;
    }
};