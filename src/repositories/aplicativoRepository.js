class AplicativoRepository {
    constructor() {
        this.aplicativos = [];
    }

    // Método para adicionar um aplicativo (usado para inicialização de dados)
    criarAplicativo(aplicativo) {
        this.aplicativos.push(aplicativo);
    }

    listarAplicativos() {
        return this.aplicativos;
    }

    atualizarCusto(idAplicativo, novoCusto) {
        const aplicativo = this.buscarPorId(idAplicativo);
        if (aplicativo) {
            aplicativo.custoMensal = novoCusto;
            return aplicativo;
        }
        throw new Error('Aplicativo não encontrado');
    }

    buscarPorId(codigo) {
        return this.aplicativos.find(aplicativo => aplicativo.codigo === parseInt(codigo));
    }
}

module.exports = new AplicativoRepository();