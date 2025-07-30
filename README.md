# 🚀 Landing Page com Backend Node.js

Este projeto é uma landing page simples com frontend estático servido pelo backend Node.js usando Express. Inclui um formulário de inscrição que envia os dados para o backend via API REST.

---

## 🛠️ Tecnologias

- 🟢 Node.js  
- ⚡ Express  
- 🌐 HTML, CSS, JavaScript (frontend estático)  
- 🚀 Fetch API para comunicação frontend-backend

---

## 📂 Estrutura do projeto

```
├── public/             # Frontend estático (HTML, CSS, JS)
├── server.js           # Backend com Express
├── package.json        # Configuração do projeto e dependências
└── README.md           # Este arquivo
```

---

## ▶️ Como rodar localmente

1. Clone o repositório:  
   ```bash
   git clone https://github.com/DarwinGAZ/landing.git
   cd landing
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Inicie o servidor:  
   ```bash
   npm start
   ```  
   O servidor rodará na porta 4040 por padrão.

4. Acesse a aplicação no navegador:  
   ```
   http://localhost:4040
   ```

---

## ⚙️ Como funciona

- 📁 O frontend está em `public/` e é servido diretamente pelo Express via `express.static`.
- 📤 O formulário envia os dados para o backend na rota `POST /subscribe`.
- 📨 O backend processa os dados recebidos e pode salvar, enviar e-mail, etc. (atualmente apenas responde com uma mensagem de sucesso).

---

## 🚀 Deploy

Para colocar a aplicação no ar, você pode usar serviços como Heroku, Railway, Render, etc.  
Lembre-se de configurar o backend para usar a porta da variável de ambiente `process.env.PORT`.

---

## ✉️ Contato

Qualquer dúvida ou sugestão, abra uma issue ou envie uma mensagem!

---

## 📄 Licença

Este projeto está sob a licença MIT.
