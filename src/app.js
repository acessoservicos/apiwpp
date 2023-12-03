const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const HttpStatusCode = require('http-status-codes');

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

app.use((req, res, next) => {
    const tokenHeader = req.headers["authorization"];

    if (!tokenHeader) {
        return res.status(HttpStatusCode.StatusCodes.UNAUTHORIZED).json({ "message": 'Acesso não autorizado!' });
    }

    try {
        jwt.verify(tokenHeader, process.env.JWT_SECRET);
        next();
    
    } catch (error) {
        return res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
});

//Carrega rotas
const personRoutes = require('./routes/person');
const condominiumRoutes = require('./routes/condominium');
const servicePointRoutes = require('./routes/servicePoint');

app.use(cors());
app.use(bodyParser.json({ limit: '200mb', extend: true }));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(bodyParser.text({ limit: '200mb' }));

const { dabataseConnection } = require('./db/database');
dabataseConnection();

app.use('/person', personRoutes);
app.use('/condominium', condominiumRoutes);
app.use('/servicePoint', servicePointRoutes);

module.exports = app;