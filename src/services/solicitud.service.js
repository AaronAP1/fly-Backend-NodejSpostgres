const { models } = require('../libs/sequelize');

class SolicitudService { 
  
    constructor() {}

    async find() {
      const res = await models.Solix.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Solix.findByPk(id);
      return res;
    }

    async create(data) {
      // Validar si el correo asociado existe en la tabla de usuarios
      const usuarioExistente = await models.Person.findOne({
        where: { correo: data.correosa },
      });
  
      if (!usuarioExistente) {
        throw new Error('El correo asociado no existe en la tabla de usuarios.');
      }
  
      const res = await models.Solix.create(data);
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

    async findByCorreo(correo) {
      const res = await models.Solix.findAll({
        where: { correosa: correo },
      });
      return res;
    }
  }

  module.exports = SolicitudService;