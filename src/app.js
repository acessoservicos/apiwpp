const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json({ limit: '200mb', extend: true }));

const { dabataseConnection } = require('./db/database');
dabataseConnection();

module.exports = app;