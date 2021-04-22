import express from "express";
import "./database"; // Importa por padrão o index.js
import {routes} from "./routes";

const app = express();

// GET = Buscas
// POST = Criação
// PUT = Alteração
// DELETE = Deleção
// PATCH = Alterar uma informação específica

app.use(express.json())

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));




/*
Anotações do método de inicialização ts + yarn

  Crie uma pasta
  yarn init -y
  yarn add express
  yarn add @types/express -d
  yarn add typescript -d
  yarn tsc --init

  Vá no arquivo tsconfig.json e mude scrict: false

  yarn add ts-node-dev -d

  Vá no arquivo package e crie um script:

  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  }

  yarn dev

  Instalamos o typeorm, seguindo o procedimento no getting started do site deles

*/