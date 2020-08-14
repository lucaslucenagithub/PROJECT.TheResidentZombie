const express = require('express')

// Controllers
const SurvivorController = require('./Controllers/SurvivorsController')

const routes = express.Router()

// Routes
routes.post('/survivors', SurvivorController.store)

module.exports = routes;