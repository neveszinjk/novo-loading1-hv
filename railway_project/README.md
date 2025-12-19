# Havan Loading - Railway Deployment

Loading animado Havan hospedado no Railway.

## 🚀 Como Fazer Deploy no Railway

### Pré-requisitos
- Conta no [Railway.app](https://railway.app)
- Repositório GitHub com os arquivos do projeto

### Passos para Deploy

1. **Criar um repositório GitHub**
   - Crie um novo repositório no GitHub
   - Clone para sua máquina local
   - Copie os arquivos deste projeto para o repositório

2. **Fazer commit e push**
   ```bash
   git add .
   git commit -m "Initial commit - Havan Loading"
   git push origin main
   ```

3. **Conectar ao Railway**
   - Acesse [railway.app](https://railway.app)
   - Clique em "New Project"
   - Selecione "Deploy from GitHub"
   - Selecione seu repositório
   - Railway detectará automaticamente como projeto Node.js

4. **Configurar Variáveis de Ambiente (Opcional)**
   - PORT: 3000 (padrão)

5. **Fazer Deploy**
   - Railway fará o deploy automaticamente
   - Você receberá uma URL pública como: `https://seu-projeto-xxxxx.railway.app`

## 📝 Estrutura do Projeto

```
.
├── package.json              # Configuração Node.js
├── server.js                 # Servidor HTTP simples
├── havan_loading_novo.html   # Arquivo HTML do loading
└── README.md                 # Este arquivo
```

## 🔗 URLs de Acesso

Após o deploy, você poderá acessar:

- **URL Principal**: `https://seu-projeto.railway.app/`
- **URL Direta**: `https://seu-projeto.railway.app/havan_loading_novo.html`

## 💡 Usando no Typebot

1. Copie a URL do seu projeto Railway
2. No Typebot, adicione um bloco de **Imagem**
3. Cole a URL do loading
4. Configure a duração para **6 segundos**

## 🛠️ Desenvolvimento Local

Para testar localmente:

```bash
npm install
npm start
```

Acesse `http://localhost:3000/havan_loading_novo.html`

## 📋 Características

- ✅ Loading de 6 segundos
- ✅ Sem looping
- ✅ Centralizado
- ✅ Alta qualidade
- ✅ Cores Havan
- ✅ CORS habilitado para uso em iframes

## 📞 Suporte

Se tiver dúvidas sobre o Railway, consulte a [documentação oficial](https://docs.railway.app)
