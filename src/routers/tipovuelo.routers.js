const express = require('express');
const router = express.Router(); 
const TipvueController = require('../controllers/tipovuelo.controller');

router
    .get('/lista', TipvueController.get )
    .get('/:id', TipvueController.getById )
    .post('/crear', TipvueController.create )
    .put('/:id', TipvueController.update )
    .delete('/:id', TipvueController._delete );

module.exports = router;