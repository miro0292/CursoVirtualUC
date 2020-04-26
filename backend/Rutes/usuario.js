'use strict'

var express = require('express');
var UsuarioController = require('../Controllers/usuario');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: 'C:/Users/mrojas30/Documents/Mis_Proyectos_prueba/Calidad de Software ll/CursoVirtualUC/backend/upload/recibos' });
router.get('/getUsuario/:user/:pass',UsuarioController.getusuario);
router.post('/postUsuario',UsuarioController.postusuario);
router.put('/putUsuario/:user',UsuarioController.putusuario);
router.delete('/deleteUsuario/:user',UsuarioController.deleteusuario);
router.post('/putFactura/:user', md_upload,  UsuarioController.putFactura);
router.get('/getFactura/:factura', UsuarioController.getFactura);
module.exports= router;
