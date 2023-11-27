const express = require('express');
const router = express.Router(); 
const soliscitudController = require('../controllers/solicitud.controller');

router
    .get('/lista', soliscitudController.get )
    .get('/:id', soliscitudController.getById )
    .get('/correo/:correo', soliscitudController.getByCorreo)
    .post('/crear', soliscitudController.create )
    .put('/:id', soliscitudController.update )
    .delete('/:id', soliscitudController._delete );

module.exports = router;