const app = require('./app.js')


const port = process.env.PORT
console.log(port)

app.listen(port, () => {
    console.log('Server Conection')
})