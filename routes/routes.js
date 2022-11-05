const express = require('express')
const PessoasController = require('./controllers/PessoasControllers')
const routes = express.Router()
routes.get('/', PessoasController.index)

routes.post('/pessoas', PessoasController.store)

module.exports = routes