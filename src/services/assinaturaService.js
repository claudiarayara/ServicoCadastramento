const assinaturaRepository = require('../repositories/assinaturaRepository');
const aplicativoRepository = require('../repositories/aplicativoRepository');
const clienteRepository = require('../repositories/clienteRepository');

class AssinaturaService {
    // Cria uma nova assinatura entre cliente e aplicativo
    async criarAssinatura(codCli, codApp) {
        const cliente = await clienteRepository.buscarPorId(codCli); // Verifica cliente
        const aplicativo = await aplicativoRepository.buscarPorId(codApp); // Verifica aplicativo

        if (!cliente) throw new Error('Cliente não encontrado'); // Erro se cliente não existe
        if (!aplicativo) throw new Error('Aplicativo não encontrado'); // Erro se app não existe

        return assinaturaRepository.criarAssinatura(codCli, codApp); // Cria assinatura
    }

    // Lista assinaturas com base no tipo (ATIVAS, CANCELADAS, TODAS)
    async listarAssinaturas(tipo) {
        return assinaturaRepository.listarAssinaturas(tipo); // Retorna lista conforme tipo
    }

    // Lista todas as assinaturas de um cliente específico
    async listarAssinaturasPorCliente(codCli) {
        const cliente = clienteRepository.buscarPorId(codCli); // Verifica cliente

        if (!cliente) throw new Error('Cliente não encontrado'); // Erro se cliente não existe

        return assinaturaRepository.listarAssinaturasPorCliente(codCli); // Lista assinaturas do cliente
    }

    // Lista todas as assinaturas de um aplicativo específico
    async listarAssinaturasPorAplicativo(codApp) {
        const aplicativo = aplicativoRepository.buscarPorId(codApp); // Verifica aplicativo

        if (!aplicativo) throw new Error('Aplicativo não encontrado'); // Erro se app não existe

        return assinaturaRepository.listarAssinaturasPorAplicativo(codApp); // Lista assinaturas do app
    }
}

module.exports = new AssinaturaService();