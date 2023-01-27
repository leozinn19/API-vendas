/* eslint-disable import/extensions */
import Usuario from '../models/Usuario.js';
import service from '../services/usuarioService.js';

class UsuarioController {
  static async mostraUsuarios(req, res) {
    try {
      const todosUsuarios = await service.pegaTodos();
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(500).json('Não foi possível mostrar usuarios', error);
    }
  }

  static async mostraUsuarioPorID(req, res) {
    const { id } = req.params;
    try {
      const usuario = await service.pegaUm({ id });
      if (usuario === null) {
        return res.status(200).json(`Usuario com o ID: ${req.params.id} não existe :(`);
      }
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async criaUsuario(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json('Não foi possível criar o usuário :(', error);
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { id } });
      if (usuario === null) {
        return res.status(200).json(`Usuário com esse id ${req.params.id} não existe`);
      }
      await Usuario.update({ name }, { where: { id } });
      return res.status(200).json(`${usuario.name} atualizado para ${req.body.name}`);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deletaUsuario(req, res) {
    const { id } = req.params;
    try {
      await Usuario.destroy({ where: { id } });

      return res.status(200).json({ message: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default UsuarioController;
