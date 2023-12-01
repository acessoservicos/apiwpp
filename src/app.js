const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

//Carrega modelos
const Apartment = require('./models/apartment');
const Floor = require('./models/floor');
const Block = require('./models/block');
const Condominium = require('./models/condominium');
const Resource = require('./models/resource');
const ResourceType = require('./models/resourceType');
const Person = require('./models/person');
const Resident = require('./models/resident');
const WebUser = require('./models/webUser');
const ServicePoint = require('./models/servicePoint');
const Permission = require('./models/permission');
const DropDelivery = require('./models/locker/dropDelivery');
const Vehicle = require('./models/vehicle');
const Garage = require('./models/garage');
const Delivery = require('./models/delivery');

//Carrega rotas
const personRoutes = require('./routes/person');

app.use(cors());
app.use(bodyParser.json({ limit: '200mb', extend: true }));

const { dabataseConnection } = require('./db/database');
dabataseConnection();

app.use('/person', personRoutes);

module.exports = app;