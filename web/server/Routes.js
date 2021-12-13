const express = require("express");
const routes = new express.Router();

const UserController = require("./controllers/UserController.js");
const PostController = require("./controllers/PostController.js");

routes.get('/listarUsuarior', UserController.listarUsuario);
routes.post('/cadastrar', UserController.cadastrar);
routes.post('/entrar', UserController.entrar);
routes.get('/listarPostagens', PostController.listarPostagens);
routes.post('/postar', PostController.postar);
routes.post('/buscar', PostController.buscar);

module.exports = routes;