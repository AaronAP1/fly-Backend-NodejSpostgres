const { Model, DataTypes } = require('sequelize');


const PERSON_TABLE = 'users';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        };
    }
}

const PersonSchema = {
    id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    correo: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'correo'
    },
    contraseña: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'contraseña'
    }
};

Person.associate = (models) => {
    // Corrige la asociación para usar el modelo correcto (Person en lugar de User)
    Person.hasMany(models.Vuelos, { foreignKey: 'correo' });
    Person.hasMany(models.Solix, { foreignKey: 'correosa' });
};

module.exports = {Person, PersonSchema};
