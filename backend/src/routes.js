const express = require('express')

// Controllers
const SurvivorController = require('./Controllers/SurvivorsController')
const ItemsController = require('./Controllers/ItemsController')
const ItemsSurvivorController = require('./Controllers/ItemsSurvivorController')
const AuthenticationController = require('./Controllers/AuthenticationController')

const routes = express.Router()

// Routes
routes.post('/survivors', SurvivorController.store)
routes.put('/survivors', SurvivorController.update)
routes.post('/survivors/:survivorId/infect', SurvivorController.infect)

routes.get('/items', ItemsController.show)

routes.get('/survivor/:survivorId/items', ItemsSurvivorController.index)

routes.post('/login', AuthenticationController.login)

module.exports = routes;