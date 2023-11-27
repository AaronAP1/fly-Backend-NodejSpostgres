const express = require('express'); 

const personsRouter = require('./usuarios.routers');
const vuelosRouter = require('./vuelos.routers');
const promocionRouter = require('./promociones.routers');
const solicitudRouter = require('./solicitud.routers');
const tipasvuelosRouter = require('./tipovuelo.routers');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', personsRouter);
  router.use('/promociones', promocionRouter);
  router.use('/vuelos', vuelosRouter);
  router.use('/solicitud', solicitudRouter);
  router.use('/tipovuelo', tipasvuelosRouter);
  
}

module.exports = routerApi;