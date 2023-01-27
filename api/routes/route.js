/* eslint-disable import/extensions */
import bodyParser from 'body-parser';
import usuario from './usuarioRoute.js';

export default (app) => {
  app
    .use(bodyParser.json())
    .use(usuario);
};
