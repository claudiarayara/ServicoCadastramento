const express = require('express');
const router = express.Router();
const assinaturaController = require('../controllers/assinaturaController');

// Rota para listar assinaturas de um cliente específico
router.get('/asscli/:codcli', (req, res) => assinaturaController.listarAssinaturasCliente(req, res));

// Rota para listar assinaturas de um aplicativo específico
router.get('/assapp/:codapp', (req, res) => assinaturaController.listarAssinaturasAplicativo(req, res));

// Rota para listar assinaturas com base no tipo (ATIVAS, CANCELADAS, TODAS)
router.get('/:tipo', (req, res) => assinaturaController.listarAssinaturas(req, res));

// Rota para criar uma nova assinatura
router.post('/', (req, res) => assinaturaController.criarAssinatura(req, res));

module.exports = router;