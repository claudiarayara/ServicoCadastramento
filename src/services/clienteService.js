const clienteRepository = require('../repositories/clienteRepository');

class ClienteService {
    // Método para listar todos os clientes
    async listarClientes() {
        return clienteRepository.listarClientes();
    }
}

module.exports = new ClienteService();
