const express = require('express'); 

const personsRouter = require('./usuarios.routers');
const vuelosRouter = require('./vuelos.routers');
const promocionRouter = require('./promociones.routers');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', personsRouter);
  router.use('/promociones', promocionRouter);
  router.use('/vuelos', vuelosRouter);
  
}

module.exports = routerApi;