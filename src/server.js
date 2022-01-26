const app = require('./app.js')
require('dotenv').config();

const port = process.env.PORT
console.log(port)

app.listen(port, () => {
    console.log('Server Conection')
})