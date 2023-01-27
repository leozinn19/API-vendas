/* eslint-disable import/extensions */
import express from 'express';
import routes from './api/routes/route.js';

const app = express();
const port = 3000;

routes(app);

app.get('/', (req, res) => res.status(200).send({ message: 'Pagina inicial' }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta: ${port}`);
});

export default app;
