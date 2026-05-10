// c:\sshplus\server.js
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Proxy para API no Google Cloud
app.use('/api', createProxyMiddleware({
    target: 'http://34.39.250.129:8080',
    changeOrigin: true
}));

// Servir arquivos estáticos
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📡 Proxy /api -> http://34.39.250.129:8080/api`);
});