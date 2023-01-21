const express = require('express')
const webRouters = require('./reuters/web.reuters')
const path = require('path');
//const PORT = 3000 
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//var data = {name:'Martin',
//hobies:['Jugar Futbol','Jugar Ajedrez', 'Ciclismo']};

//app.get('/', (req, res) => {
//    res.render('homepage', { data: data })
//})

app.use(webRouters)

module.exports = app
