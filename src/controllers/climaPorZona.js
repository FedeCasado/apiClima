const axios = require('axios');
require('dotenv').config();

const url = process.env.UrlPorZona

exports.climaPorZona = async (req, res, next) => {
    const respuesta = await axios({
         method: "get",
         url: url
     })
 
     res.json(respuesta.data);
}