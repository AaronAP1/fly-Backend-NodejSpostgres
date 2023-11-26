const { Model, DataTypes } = require('sequelize');



const VUELO_TABLE = 'vuelos';

class Vuelos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VUELO_TABLE,
            modelName: 'vueloss',
            timestamps: true
        };
    }
}

const VuelosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    fecha: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'fecha'
    },
    hora: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'hora'
    },
    lugar: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'lugar'
    },
    correo: {
        allowNull: true,
        foreignKey: true,
        type: DataTypes.STRING,
        field: 'correo'
    }
};


Vuelos.associate = (models) => {
    // Corrige la asociación a Vuelos en lugar de User
    Vuelos.belongsTo(models.Person, { foreignKey: 'correo' });
};

module.exports = {Vuelos, VuelosSchema};
