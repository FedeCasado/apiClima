const axios = require('axios');
const { buscarCoordenadas }= require('./obtenerDatosIp');

exports.obtenerClimaPorIP = async () => {

       // Clave de la API.
       const key = process.env.KEY_WEATHER

       //Obteniendo coordenadas...
       const {lat, lon}= await buscarCoordenadas()
   
       // Realizando la consulta a la API del clima y devolviendo el JSON
       const respuesta = await axios({
           method: "get",
           url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
       });

       return respuesta;

}