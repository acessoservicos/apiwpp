const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json({ limit: '200mb', extend: true }));


module.exports = app;