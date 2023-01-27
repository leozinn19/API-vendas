/* eslint-disable no-console */
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('vendas', 'root', 'Leonardo@19', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => { console.log('Conexão com o banco de dados realizada!'); })
  .catch(() => console.log('Não está conectado com o banco de dados :'));

export default sequelize;
