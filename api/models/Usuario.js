import { Sequelize } from 'sequelize';
// eslint-disable-next-line import/extensions
import db from './config.js';

const Usuario = db.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Usuario.sync();

export default Usuario;
