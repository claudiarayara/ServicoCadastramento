const app = require('./app');
const config = require('./config');

const PORT = config.server.port;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
