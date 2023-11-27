const { Person, PersonSchema } = require('./usuario.model');
const { Promo, PromoxsSchema} = require('./promociones.model');
const { Vuelos, VuelosSchema} = require('./vuelos.modej');
const { Soli, SolixsSchema} = require('./solicitud.model');
const {TipoVue, VuelosTipssSchema} = require('./tipovuelo.model');


function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Promo.init(PromoxsSchema, Promo.config(sequelize));
    Vuelos.init(VuelosSchema, Vuelos.config(sequelize));
    Soli.init(SolixsSchema, Soli.config(sequelize));
    TipoVue.init(VuelosTipssSchema, TipoVue.config(sequelize));
    
}

module.exports = setupModels;