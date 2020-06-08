'use strict'

var validator = require('validator');
var md5 = require('md5');
var Usuario = require('../Models/usuario');
var fs = require('fs');
var path = require('path');


var controller = {

    getusuario: (req, res) => {
        var useruser = req.params.user;
        var userpass = req.params.pass;
        if (useruser != "" && userpass != "0") {
            Usuario.find({ usuario: useruser, contrasena: userpass }, (err, usuariofind) => {
                var legth = usuariofind.length;
                if (legth != 0 || legth > 0) {
                    return res.status(200).send({
                        status: 'success',
                        usuario: usuariofind
                    });
                } else {
                    return res.status(200).send({
                        status: 'error',
                        descripcion: 'No se encontro usuario'
                    });
                }
            });
        } else if (userpass = "0") {
            Usuario.find({ usuario: useruser }, (err, usuariofind) => {
                if (usuariofind != undefined) {
                    return res.status(200).send({
                        status: 'success',
                        usuario: usuariofind
                    });
                } else {
                    return res.status(200).send({
                        status: 'error',
                        descripcion: 'no fue posible encontrar el usuario'
                    });
                }
            });
        }
    },
    postusuario: (req, res) => {
        var params = req.body;
        try {
            if (params.nombre != "" & params.telefono != "" & params.correo != "") {
                var usuario = new Usuario();
                usuario.nombre = params.nombre;
                usuario.tel = params.telefono;
                usuario.correo = params.correo;
                var usr = params.correo.split("@", 1);
                usuario.usuario = String(usr);
                var pss = md5(params.telefono + params.correo);
                var psss = pss.substring(0, 8);
                usuario.contrasena = psss;
                usuario.rol = params.rol;
                usuario.comprobantePago = "0";
                usuario.examen="0";
                usuario.calificacion="0";
                Usuario.find({ correo: params.correo }, (err, usuariofind) => {
                    if (usuariofind == undefined || usuariofind.length == 0) {
                        usuario.save((err, usuariosave) => {
                            if (err || !usuariosave) {
                                return res.status(404).send({
                                    status: 'Error',
                                    descripcion: "no fue posible almacenar el usuario vuelva a intentarlo"
                                });
                            } else {
                                return res.status(200).send({
                                    status: 'success',
                                    usuario: usuariosave
                                });
                            }
                        });
                    } else {
                        return res.status(200).send({
                            status: 'error',
                            descripcion: 'usuario ya existe'
                        });
                    }
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: 'Error',
                descripcion: 'No se ingreso la informacion correctamente',
                errorr: error

            });
        };
    },
    putusuario: (req, res) => {
        var useruser = req.params.user;
        var params = req.body;
        try {
            if (useruser != "") {
                Usuario.findOneAndUpdate({ usuario: useruser }, params, { new: true }, (err, usuarioupdate) => {
                    if (err) {
                        return res.status(500).send({
                            status: 'error',
                            resultado: 'No se pudo realizr la acutualizacion del usuario'
                        });
                    } else if (!usuarioupdate) {
                        return res.status(404).send({
                            status: 'error',
                            resultado: 'No se encontro usuario'
                        });
                    } else {
                        return res.status(200).send({
                            status: 'success',
                            usuaro: usuarioupdate
                        });
                    }
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                resultado: 'No se pudo realizr la acutualizacion del usuario'
            });
        }
    },
    deleteusuario: (req, res) => {
        var useruser = req.params.user;
        Usuario.findOneAndDelete({ usuario: useruser }, (err, usuarioremove) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    resultado: 'No se pudo realizr la eliminacion del usuario'
                });
            } else if (!usuarioremove) {
                return res.status(404).send({
                    status: 'error',
                    resultado: 'No se encontro usuario'
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    usuaro: usuarioremove
                });
            }
        })
    },
    putFactura: (req, res) => {

        var file_name = 'Imagen no subida...';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }
        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        // Nombre del archivo
        var file_name = file_split[9];

        // Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {

            // borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            });

        } else {
            // Si todo es valido, sacando id de la url
            var articleId = req.params.user;

            if (articleId) {
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Usuario.findOneAndUpdate({ usuario: articleId }, { comprobantePago: file_name }, { new: true }, (err, usuarioUpdated) => {
                    if (err || !usuarioUpdated) {
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        usuario: usuarioUpdated
                    });
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
            }

        }
    },
    getFactura: (req, res) => {
        var file = req.params.factura;
        var path_file = 'C:/Users/mrojas30/Documents/Mis_Proyectos_prueba/Calidad de Software ll/CursoVirtualUC/backend/upload/recibos/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    }
};

module.exports = controller;