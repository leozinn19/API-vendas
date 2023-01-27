import { Router } from 'express';
// eslint-disable-next-line import/extensions
import UsuarioController from '../controllers/usuarioController.js';

const router = Router();

router.get('/usuarios', UsuarioController.mostraUsuarios);
router.get('/usuarios/:id', UsuarioController.mostraUsuarioPorID);
router.post('/usuarios', UsuarioController.criaUsuario);
router.put('/usuarios/:id', UsuarioController.atualizaUsuario);
router.delete('/usuarios/:id', UsuarioController.deletaUsuario);

export default router;
