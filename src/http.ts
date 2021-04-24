import express from "express";
import "./database"; // Importa por padrão o index.js
import {routes} from "./routes";
import path from "path";

import {createServer} from "http";
import {Server, Socket} from "socket.io"

const app = express();

app.use(express.static( path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});


const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
})

// GET = Buscas
// POST = Criação
// PUT = Alteração
// DELETE = Deleção
// PATCH = Alterar uma informação específica

app.use(express.json())

app.use(routes);

export {http, io}