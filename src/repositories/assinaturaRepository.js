const { filter } = require('rxjs');
const Assinatura = require('../entities/Assinatura');

class AssinaturaRepository {
    constructor() {
        this.assinaturas = [];
        this.ultimoCodigo = 1;
    }

    // Cria uma nova assinatura e adiciona ao repositório
    criarAssinatura(codApp, codCli, dataInicio = new Date(), dataFim = null) {
        if (!dataFim) {
            dataFim = new Date(dataInicio);
            dataFim.setDate(dataInicio.getDate() + 30); // Define o padrão para 30 dias depois
        }

        const novaAssinatura = new Assinatura(
            this.ultimoCodigo++, // Gera um novo código único para a assinatura
            codApp,
            codCli,
            dataInicio.toLocaleDateString('pt-BR').replace(/\//g, '-'), // Data de início no formato DD-MM-AAAA
            dataFim.toLocaleDateString('pt-BR').replace(/\//g, '-') // Data de término no formato DD-MM-AAAA
            );

        this.assinaturas.push(novaAssinatura);
        return novaAssinatura;
    }

    // Lista todas as assinaturas ou filtra por status
    listarAssinaturas(tipo) {
        const dataAtual = new Date();

        return this.assinaturas.map(assinatura => {
            const dataFim = new Date(assinatura.fimVigencia.split('-').reverse().join('-'));
            assinatura.status = dataFim > dataAtual ? 'ATIVA' : 'CANCELADA';
            return assinatura;
        }).filter(assinatura => {
            if (tipo == 'ATIVAS') return assinatura.status == 'ATIVA';
            if (tipo == 'CANCELADAS') return assinatura.status === 'CANCELADA';
            return true;
        });
    }

    // Lista assinaturas de um cliente específico
    listarAssinaturasPorCliente(codCli) {
        return this.listarAssinaturas('TODAS').filter(assinatura => assinatura.codCli === parseInt(codCli));
    }

    // Lista assinaturas de um aplicativo específico
    listarAssinaturasPorAplicativo(codApp) {
        return this.listarAssinaturas('TODAS').filter(assinatura => assinatura.codApp === parseInt(codApp));
    }
}

module.exports = new AssinaturaRepository();
