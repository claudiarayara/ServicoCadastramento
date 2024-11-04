const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para listar todos os clientes
router.get('/', (req, res) => clienteController.listarClientes(req, res));

module.exports = router;