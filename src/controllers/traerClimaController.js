// const fetch = require('node-fetch');
const axios = require('axios');
require('dotenv').config();

const url = process.env.UrlLOCAL

exports.buscandoClima = async (req, res, next) => {
   const respuesta = await axios({
        method: "get",
        url: url
    })

    res.json(respuesta.data);
   
};


