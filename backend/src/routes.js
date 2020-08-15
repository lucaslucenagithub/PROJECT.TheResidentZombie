const express = require('express')

// Controllers
const SurvivorController = require('./Controllers/SurvivorsController')
const ItemsController = require('./Controllers/ItemsController')

const routes = express.Router()

// Routes
routes.post('/survivors', SurvivorController.store)
routes.get('/items', ItemsController.show)

module.exports = routes;