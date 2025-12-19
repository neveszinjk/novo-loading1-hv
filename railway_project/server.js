const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Ler o arquivo HTML
const htmlPath = path.join(__dirname, 'havan_loading_novo.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Criar servidor
const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Servir o HTML
  if (req.url === '/' || req.url === '/havan_loading_novo.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Página não encontrada');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}/havan_loading_novo.html`);
});
