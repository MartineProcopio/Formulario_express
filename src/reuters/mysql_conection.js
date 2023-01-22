const mysql = require('mysql2')



const conexion = mysql.createConnection({
    host: 'localhost',
    database:'agenda_contactos',
    user:'root',
    password:''
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Coneccion Exitosa')
    }
})

conexion.end()

module.exports = conexion