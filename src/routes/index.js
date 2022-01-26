const express = require('express');
const router = express.Router();


const controlPorIp = require('../controllers/traerClimaController')
const controlPorHora = require('../controllers/climaPorHoraController')
const controlPorZona= require('../controllers/climaPorZona');

router.get('/location', controlPorIp.buscandoClima);

router.get('/current', controlPorHora.climaPorHora)

router.get('/forecast', controlPorZona.climaPorZona)

module.exports = router;