const axios = require('axios');

const {obtenerClimaPorIP} = require('./obtenerClimaPorIp');


// Clave de la API.

const key = process.env.KEY_WEATHER

exports.climaPorZona = async (req, res, next) => {
  const cityName = req.params.city

    if(cityName){
        
        const respuesta = await axios({
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        })
         return res.json(respuesta.data);
    }
    
   const respuesta = await obtenerClimaPorIP()

   res.json(respuesta.data)

};