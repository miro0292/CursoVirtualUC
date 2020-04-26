'use strict'

//cargar modulos de node para cargar servidor 
var express = require('express');
var bodyParser = require('body-parser');

//ejecutar express (http)
var app = express();
//cargar ficheros o rutas
var usuarioRoutes = require('./Rutes/usuario');
//cargar middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//activar CORS

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Cargar tutas

app.use('/apiuc', usuarioRoutes);
//exportar modulos
module.exports = app;
