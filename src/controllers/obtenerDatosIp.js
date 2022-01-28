const axios = require('axios');
require('dotenv').config();
const urlIP = process.env.UrlIp;

console.log(urlIP)
exports.buscarCoordenadas = async () => {

    const datosIP = await axios({
        method: "get",
        url: urlIP
    });
    const lat = datosIP.data.lat;
    const lon =datosIP.data.lon;

    return {
        lat,
        lon
    }

}
