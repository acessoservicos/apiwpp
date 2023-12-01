const mongoose = require('mongoose');
require('dotenv').config();

const databaseUrl = process.env.DATABASEURL;

exports.dabataseConnection = () => {
    try {
        mongoose.connect(databaseUrl);
        console.log("Database Connection");
    } catch (error) {
        console.log(error)
    }
}