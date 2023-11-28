const express = require('express');
const router = express.Router(); 
const vuelosController = require('../controllers/vuelos.controller');

router
    .get('/lista', vuelosController.get )
    .get('/:id', vuelosController.getById )
    .get('/correo/:correo', vuelosController.listarVuelosPorCorreo)
    .get('/correo/ultimo/:correo', vuelosController.getLastByCorreo)
    .get('/correo/penultimo/:correo', vuelosController.getSecondLastByCorreo)
    .post('/crear', vuelosController.create )
    .put('/:id', vuelosController.update )
    .delete('/:id', vuelosController._delete );
    

module.exports = router;