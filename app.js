const express = require('express');
const fs = require('fs');
const path = require('path');
const clienteRoutes = require('./src/routes/clienteRoutes');
const aplicativoRoutes = require('./src/routes/aplicativoRoutes');
const assinaturaRoutes = require('./src/routes/assinaturaRoutes');
const clienteRepository = require('./src/repositories/clienteRepository');
const aplicativoRepository = require('./src/repositories/aplicativoRepository');
const assinaturaRepository = require('./src/repositories/assinaturaRepository');

const app = express();
app.use(express.json());

function inicializarDados() {
    const dataPath = path.join(__dirname, 'src', 'dataInicial.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Carregar clientes
    data.clientes.forEach(cliente => clienteRepository.adicionarCliente(cliente));

    // Carregar aplicativos
    data.aplicativos.forEach(aplicativo => aplicativoRepository.criarAplicativo(aplicativo));

    // Carregar assinaturas
    data.assinaturas.forEach(assinatura => {
        const dataInicio = new Date(assinatura.inicioVigencia);
        const dataFim = new Date(assinatura.fimVigencia);
        assinaturaRepository.criarAssinatura(assinatura.codApp, assinatura.codCli, dataInicio, dataFim);
    });
}

// Inicialize dados de teste ao iniciar o aplicativo
inicializarDados();

// Configuração das rotas principais
app.use('/servcad/clientes', clienteRoutes);
app.use('/servcad/aplicativos', aplicativoRoutes);
app.use('/servcad/assinaturas', assinaturaRoutes);
app.use('/servcad', assinaturaRoutes);

module.exports = app;