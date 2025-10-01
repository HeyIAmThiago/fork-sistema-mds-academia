# Use uma imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de dependência
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que o back-end usa (verifique seu app.js, geralmente 3000 ou 5000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]