const {Model, DataTypes, Sequelize} = require('sequelize');


const PROMO_TABLE = 'promo';

class Promo extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: PROMO_TABLE,
            modelName: 'Promox',
            timestamps: true
        }
    }
}


const PromoxsSchema = {
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
    fecha_inicio:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'fecha_inicio'
    },
    fecha_fin:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'fecha_fin'
    },
}

module.exports = {Promo, PromoxsSchema};