const express = require('express');
const router = express.Router(); 
const promocionesController = require('../controllers/promociones.controller');

router
    .get('/lista', promocionesController.get )
    .get('/:id', promocionesController.getById )
    .post('/crear', promocionesController.create )
    .put('/:id', promocionesController.update )
    .delete('/:id', promocionesController._delete );

module.exports = router;