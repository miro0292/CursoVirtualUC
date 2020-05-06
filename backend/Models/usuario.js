'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UsuarioSchema = schema({
    usuario: String,
    nombre: String,
    apellidos: String,
    edad: Number,
    contrasena:String,
    correo:String,
    fechamodificacion : {type: Date,default:Date.now},
    tel: Number,
    comprobantePago: String,
    rol: String,
    examen: String,
    calificacion: String
});

module.exports = mongoose.model('Usuario',UsuarioSchema);