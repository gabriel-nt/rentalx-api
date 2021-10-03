<p align="center">
  <img src="https://i.imgur.com/oUAKMC5.png" alt="Rentx" />
</p>

<h1 align="center">
    🚀 Rentx
</h1>
<p align="center">Backend da aplicação Rentx</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=14.15&color=green&logo=node.js" />
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.3.5&color=blue&logo=typescript" />
  <!--<img src="https://img.shields.io/badge/repo%20size-2.00%20MB-informational" />-->
  <img src="https://img.shields.io/badge/last%20commit-october-orange" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-back-end-servidor">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-bibliotecas">Bibliotecas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 📌 Sobre 
O Rentx é uma aplicação para aluguel de veículos.
Os usuários da aplicação, podem alugar carros por um determinado tempo.
Já os usuários adminstradores, podem cadastrar novos veículos, categorias e especificações dos carros.

### 📎 Features

#### Aluguel
- [x] Criação de Aluguel
- [x] Devolução de Veículos
- [x] Listagem de Alugueis ativos por usuário

### Carros
- [x] Criação de carros
- [x] Criação de especificações dos carros
- [x] Criação de Categorias e importação de categorias
- [x] Listagem de carros disponíveis para aluguel
- [x] Upload de images dos carros

#### Usuários
- [x] Autenticação
- [x] Criação de Perfil
- [x] Listagem do Perfil
- [x] Refresh Token
- [x] Reset de Senhas
- [x] Atualização do Avatar

#### Gerais
- Cache
  - [x] Redis
- Documentações
  - [x] Swagger
- ORM
  - [x] Typeorm
- Logs
  - [x] Sentry
- Upload de Imagens
  - [x] Amazon S3
  - [x] Disk Storage
- Envio de Emails
  - [x] Amazon SES
  - [x] Ethereal

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/)
Também, será necessário ter o [Docker](https://www.docker.com/) instalado e configurado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🛢 Configurando Docker
```bash

# Clone este repositório
$ git clone https://github.com/gabriel-nt/rentx-api

# Subir o docker-compose
$ docker-compose up

````

### 🎲 Rodando o Back End (servidor)

```bash
# Instale as dependências
$ npm install ou yarn

# Rode as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server ou npm run dev

# Execute os testes
$ yarn test

# Execute os testes com Coverage
$ yarn test --coverage

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
* Obs: Para executar os backend, crie um banco de dados.

### 🧾 Insomnia
Para ter um exemplo das rotas para a nossa API, basta clicar no link abaixo:
</br>
<a href="https://insomnia.rest/run/?label=Rest%20API%20GoBarber&uri=https%3A%2F%2Fgithub.com%2Fgabriel-nt%2FGoBarber-Backend%2Fblob%2Fmaster%2Ftmp%2Frest_api.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- TypeScript
- Postgres
- Redis

### 📕 Bibliotecas

Esse projeto foi desenvolvido com o auxílio das seguintes libs:

- Express
- Jest
- TypeORM
- aws-sdk
- jwt
- dayjs
- multer
- swagger-ui-express
- nodemailer
- tsyringe
- typeorm
- handlebars

### 📙 Arquitetura do Projeto

Para uma melhorar estrutura de projetos utilizamos das seguintes fundamentos:

- DDD
- TDD
- SOLID

###  📘 Padrão de Código

Para padronizar a escrita do código, utilizamos as seguinte ferramentas:

- Eslint
- Prettier
- EditorConfig

### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>

Feito por Gabriel Teixeira
