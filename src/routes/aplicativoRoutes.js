const express = require('express');
const router = express.Router();
const aplicativoController = require('../controllers/aplicativoController');

// Rota para listar todos os aplicativos
router.get('/', (req, res) => aplicativoController.listarAplicativos(req, res));

// Rota para atualizar o custo mensal de um aplicativo
router.patch('/:idAplicativo', (req, res) => aplicativoController.atualizarCusto(req, res));

module.exports = router;
