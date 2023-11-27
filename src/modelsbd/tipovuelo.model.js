const {Model, DataTypes, Sequelize} = require('sequelize');


const TIPO_TABLE = 'tipovuelo';

class TipoVue extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: TIPO_TABLE,
            modelName: 'TipoVuelox',
            timestamps: true
        }
    }
}


const VuelosTipssSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    descripcion:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    precio:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'fecha_inicio'
    },
    
}

module.exports = {TipoVue, VuelosTipssSchema};