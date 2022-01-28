const express = require('express');
const router = express.Router();


const controlPorIp = require('../controllers/traerClimaController')
const controlPorHora = require('../controllers/climaPorHoraController')
const controlPorZona= require('../controllers/climaPorZona');

router.get('/location', controlPorIp.buscandoClima);

router.get('/current/:city?', controlPorHora.climaPorHora)

router.get('/forecast/:city?', controlPorZona.climaPorZona)

module.exports = router;