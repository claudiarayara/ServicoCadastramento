const assinaturaService = require('../services/assinaturaService');

class AssinaturaController {
    // Método para listar assinaturas com base no tipo
    async listarAssinaturas(req, res) {
        const { tipo } = req.params;
        try {
            const assinaturas = await assinaturaService.listarAssinaturas(tipo);
            res.json(assinaturas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Método para listar assinaturas de um cliente específico
    async listarAssinaturasCliente(req, res) {
        const { codcli } = req.params;
        try {
            const assinaturas = await assinaturaService.listarAssinaturasPorCliente(codcli);
            res.json(assinaturas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Método para listar assinaturas de um aplicativo específico
    async listarAssinaturasAplicativo(req, res) {
        const { codapp } = req.params;
        try {
            const assinaturas = await assinaturaService.listarAssinaturasPorAplicativo(codapp);
            res.json(assinaturas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Método para criar uma nova assinatura
    async criarAssinatura(req, res) {
        const { codApp, codCli } = req.body;
        try {
            const novaAssinatura = await assinaturaService.criarAssinatura(codApp, codCli);
            res.status(201).json(novaAssinatura);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AssinaturaController();