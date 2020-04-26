'use strict'


var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;


mongoose.set('useFindAndModify', false);
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://miro0292:1234@miro0292-kapsp.mongodb.net/cursovirtualuc?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() =>{
            console.log('La conexion a la base de datos se ha realizado de manera correcta');

            //crear servidor
            app.listen(port, () =>{
                console.log('Servidor conectado correctamente http://localhost:'+port);
            });
});
