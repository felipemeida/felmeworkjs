# PRINCIPAIS COMANDOS PM2 SERVIDOR

### Remover as configs antigas
- pm2 delete all

### Escolher o modo da aplicação
- pm2 start server.config.js --env development
- pm2 start server.config.js --env production

### Salvar as alterações
- pm2 save

### Aparecer os logs
- pm2 logs

# PRINCIPAIS COMANDOS NPM

### Rodar no modo de teste
- npm run server

### Rodar no modo produção
- npm run server-prod

### Rodar os testes
- npm run test