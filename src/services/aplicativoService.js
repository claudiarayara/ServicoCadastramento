const aplicativoRepository = require('../repositories/aplicativoRepository');

class AplicativoService {
    // Método para listar todos os aplicativos
    async listarAplicativos() {
        return aplicativoRepository.listarAplicativos();
    }

    // Método para atualizar o custo mensal de um aplicativo específico
    async atualizarCusto(idAplicativo, novoCusto) {
        // Verifica se o novo custo é válido
        if (isNaN(novoCusto) || novoCusto <= 0) {
            throw new Error('O custo deve ser um valor numérico positivo');
        }

        // Atualiza o custo através do repositório
        const aplicativoAtualizado = aplicativoRepository.atualizarCusto(idAplicativo, novoCusto);
        
        if (!aplicativoAtualizado) {
            throw new Error('Aplicativo não encontrado');
        }
        
        return aplicativoAtualizado;
    }
}

module.exports = new AplicativoService();
