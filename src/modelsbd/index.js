const { Person, PersonSchema } = require('./usuario.model');
const { Promo, PromoxsSchema} = require('./promociones.model');
const { Vuelos, VuelosSchema} = require('./vuelos.modej');


function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Promo.init(PromoxsSchema, Promo.config(sequelize));
    Vuelos.init(VuelosSchema, Vuelos.config(sequelize));
    
}

module.exports = setupModels;