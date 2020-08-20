const express = require('express')

// Controllers
const SurvivorController = require('./Controllers/SurvivorsController')
const ItemsController = require('./Controllers/ItemsController')
const ItemsSurvivorController = require('./Controllers/ItemsSurvivorController')
const AuthenticationController = require('./Controllers/AuthenticationController')
const ReportController = require('./Controllers/ReportController')

const routes = express.Router()

// Routes
routes.get('/survivors', SurvivorController.show)
routes.get('/survivors/:survivorId', SurvivorController.index)
routes.post('/survivors', SurvivorController.store)
routes.put('/survivors/coords', SurvivorController.updateCoords)
routes.post('/survivors/:survivorId/infect', SurvivorController.infect)

routes.get('/items', ItemsController.show)

routes.get('/survivor/:survivorId/items', ItemsSurvivorController.index)

routes.post('/login', AuthenticationController.login)

routes.get('/survivors/infected/percentage', ReportController.infectedSurvivorsPercentage)
routes.get('/survivors/items_amount/average', ReportController.itemsKindAmountAverageBySurvivor)
routes.get('/survivors/non_infected/percentage', ReportController.nonInfectedSurvivorsPercentage)
routes.get('/survivors/infected/points_lost', ReportController.pointsLostBecauseInfect)

module.exports = routes;