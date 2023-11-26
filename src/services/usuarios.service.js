const { models } = require('../libs/sequelize');

class UsuarioService {
  constructor() {}

  async find() {
    const res = await models.Person.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Person.findByPk(id);
    return res;
  }

  async findByCorreo(correo) {
    const res = await models.Person.findOne({
      where: {
        correo: correo,
      },
    });
    return res;
  }

  async create(data) {
    // Verificar si ya existe un usuario con el mismo correo
    const existingUser = await this.findByCorreo(data.correo);
    if (existingUser) {
      throw new Error('Ya existe un usuario con este correo.');
    }

    // Si no existe, crear el nuevo usuario
    const res = await models.Person.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }
}

module.exports = UsuarioService;