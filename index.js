
const server = require('./src/app')
const config = require('./src/config')
const conexion = require('./src/reuters/mysql_conection')

server.listen(config.server.port, ()=>{
    console.log('Escuchando en el puerto '+config.server.port)
})