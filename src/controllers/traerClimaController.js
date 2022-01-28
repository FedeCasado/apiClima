const axios = require('axios');
require('dotenv').config();
const {obtenerClimaPorIP} = require('./obtenerClimaPorIp');


// Buscando el clima segun la zona de la IP
exports.buscandoClima = async (req, res, next) => {

    const respuesta = await obtenerClimaPorIP()

    res.json(respuesta.data);

};


