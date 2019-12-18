const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); //Visualização dos dados 
routes.get('/products/:id', ProductController.show); //Visualização por Id
routes.post('/products', ProductController.store); //Criação de dados 
routes.put('/products/:id', ProductController.update); //Atualização dos dados 
routes.delete('/products/:id', ProductController.destroy); //Exclução dos dados

module.exports = routes;