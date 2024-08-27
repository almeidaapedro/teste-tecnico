# Usar uma imagem base do Node.js
FROM node:18

# Criar e definir o diretório de trabalho
WORKDIR /servico-leitura/src/app.module

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "start:dev"]
