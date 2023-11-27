const {Model, DataTypes} = require('sequelize');


const SOLI_TABLE = 'solicitud';

class Soli extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: SOLI_TABLE,
            modelName: 'Solix',
            timestamps: true
        }
    }
}


const SolixsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    tipo_vuelo:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'tipo_vuelo'
    },
    personas:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'personas'
    },
    promocion:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'promocion'
    },
    fecha:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'fecha'
    },
    correosa:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'correosa'
    }
};

Soli.associate = (models) => {
    Soli.belongsTo(models.Person, { foreignKey: 'correosa' });
};

module.exports = {Soli, SolixsSchema};