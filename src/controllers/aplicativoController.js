const aplicativoService = require('../services/aplicativoService');

class AplicativoController {
    async listarAplicativos(req, res) {
        try {
            const aplicativos = await aplicativoService.listarAplicativos();
            res.json(aplicativos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async atualizarCusto(req, res) {
        const { idAplicativo } = req.params;
        const { custo } = req.body;

        try {
            const aplicativoAtualizado = await aplicativoService.atualizarCusto(idAplicativo, custo);
            res.json(aplicativoAtualizado);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AplicativoController();
