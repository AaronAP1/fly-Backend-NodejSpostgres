const express = require('express');
const router = express.Router(); 
const vuelosController = require('../controllers/vuelos.controller');

router
    .get('/lista', vuelosController.get )
    .get('/:id', vuelosController.getById )
    .get('/correo/:correo', vuelosController.listarVuelosPorCorreo)
    .post('/crear', vuelosController.create )
    .put('/:id', vuelosController.update )
    .delete('/:id', vuelosController._delete );
    

module.exports = router;