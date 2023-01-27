/* eslint-disable import/extensions */
import usuario from '../models/Usuario.js';

class UsuarioService {
  static async pegaTodos() {
    return usuario.findAll();
  }

  static async pegaUm({ id }) {
    return usuario.findOne({ where: { id } });
  }
}

export default UsuarioService;
