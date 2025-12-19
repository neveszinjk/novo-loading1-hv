const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Criar servidor
const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Servir arquivos HTML
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Se não tiver extensão, tenta adicionar .html
  if (!path.extname(filePath)) {
    filePath += '.html';
  }

  // Validar que o arquivo está no diretório correto (segurança)
  const realPath = path.resolve(filePath);
  const baseDir = path.resolve(__dirname);
  
  if (!realPath.startsWith(baseDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 - Acesso negado');
    return;
  }

  // Tentar ler o arquivo
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Página não encontrada');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
