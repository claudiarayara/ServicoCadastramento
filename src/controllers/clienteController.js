const clienteService = require('../services/clienteService');

class ClienteController {
    async listarClientes(req, res) {
        try {
            const clientes = await clienteService.listarClientes();
            res.status(200).json(clientes); // Certifique-se de que está chamando res.status corretamente
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ClienteController();
