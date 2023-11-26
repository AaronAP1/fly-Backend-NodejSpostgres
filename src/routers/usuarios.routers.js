const express = require('express');
const router = express.Router(); 
const personsController = require('../controllers/usuario.controller');

router
    .get('/lista', personsController.get )
    .get('/:id', personsController.getById )
    .post('/crear', personsController.create )
    .put('/:id', personsController.update )
    .delete('/:id', personsController._delete );

module.exports = router;