const express  = require('express')

const webRouters = express.Router()// instancia de ruteado

var data = {name:'Martin',
hobies:['Jugar Futbol,','Jugar Ajedrez,', 'Ciclismo.']};

webRouters.get('/', (req,res)=>{
    res.render('index',{ data: data })
})

module.exports = webRouters