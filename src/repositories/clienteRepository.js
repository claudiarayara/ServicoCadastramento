class ClienteRepository {
    constructor() {
        this.clientes = []; // Inicializa com uma lista vazia
    }

    // Método para adicionar um cliente (usado durante a inicialização de dados)
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    listarClientes() {
        return this.clientes;
    }

    // Método para buscar um cliente pelo ID
    buscarPorId(codigo) {
        return this.clientes.find(cliente => cliente.codigo === parseInt(codigo));
    }
}

module.exports = new ClienteRepository();