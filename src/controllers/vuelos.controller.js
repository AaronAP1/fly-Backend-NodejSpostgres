const VuelosService = require('../services/vuelos.service');
const service = new VuelosService();
const { models } = require('../libs/sequelize');


const create = async (req, res) => {
    try {
        const { correo, ...vueloData } = req.body;

        // Verifica si el correo proporcionado existe en la tabla de usuarios
        const usuarioEncontrado = await models.Person.findOne({
            where: {
                correo: correo,
            },
        });

        if (usuarioEncontrado) {
            // Si el usuario existe, crea el vuelo asociado a ese usuario
            const response = await service.create({
                ...vueloData,
                correo: correo, // Asocia el vuelo al usuario con este correo
            });
            res.json({ success: true, data: response });
        } else {
            // Si el usuario no existe, devuelve un mensaje de error
            res.status(400).json({ success: false, message: 'El correo proporcionado no existe en la tabla de usuarios' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getLastByCorreo = async (req, res) => {
    try {
      const { correo } = req.params;
      const response = await service.findLastByCorreo(correo);
      res.json(response);
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const listarVuelosPorCorreo = async (req, res) => {
    try {
      const { correo } = req.params;
      const resultado = await service.listarVuelosPorCorreo(correo);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  const getSecondLastByCorreo = async (req, res) => {
    try {
      const { correo } = req.params;
      const response = await service.findSecondLastByCorreo(correo);
      res.json(response);
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }; 

module.exports = {
    create, get, getById, update, _delete, listarVuelosPorCorreo, getLastByCorreo, getSecondLastByCorreo
};