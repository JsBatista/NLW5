import express from "express";

const app = express();

// GET = Buscas
// POST = Criação
// PUT = Alteração
// DELETE = Deleção
// PATCH = Alterar uma informação específica

app.get("/", (request, response) => {
  return response.json({message: "Hello NLW05"});
});

// Acessar via http://localhost:3333/

app.post("/", (request, response) => {
  return response.json({message: "Usuário salvo com sucesso!"});
});

// Podemos colocar a mesma rota pois estamos usando métodos diferentes, sendo eles GET e POST
// Por padrão, os navegadores vão fazer requisições GET


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
*/