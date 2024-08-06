const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const clientes = require('./modulos/clientes/rutas')

const comentarios = require('./modulos/comentarios/rutas')

const app = express();

//MiddleWare
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));


//configuracion
app.set('port', config.app.port);


//rutas
app.use('/api/clientes', clientes)
app.use('/api/comentarios', comentarios)


module.exports = app;