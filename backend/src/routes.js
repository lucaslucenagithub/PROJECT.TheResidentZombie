const express = require('express')

// Controllers
const SurvivorController = require('./Controllers/SurvivorsController')
const ItemsController = require('./Controllers/ItemsController')
const ItemsSurvivorController = require('./Controllers/ItemsSurvivorController')
const AuthenticationController = require('./Controllers/AuthenticationController')
const ReportController = require('./Controllers/ReportController')

const routes = express.Router()

// Routes
/**
 * @swagger
 * /survivors:
 *  get:
 *    description: Use to request all survivors
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors', SurvivorController.show)

/**
 * @swagger
 * /survivors/{survivorId}:
 *  get:
 *    description: Use to request a survivor passing his id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors/:survivorId', SurvivorController.index)

/**
 * @swagger
 * /survivors:
 *  post:
 *    description: Use to register a new survivor
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/survivors', SurvivorController.store)

/**
 * @swagger
 * /survivors/coords:
 *  pu:
 *    description: Use to update a survivor coordinates
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.put('/survivors/coords', SurvivorController.updateCoords)

/**
 * @swagger
 * /survivors/{survivorId}/infect:
 *  post:
 *    description: Use to report a survivor as infected
 *    obs: 5 times reported turns survivor into an infected person
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/survivors/:survivorId/infect', SurvivorController.infect)

/**
 * @swagger
 * /items:
 *  get:
 *    description: Use to request all items available
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/items', ItemsController.show)

routes.get('/survivor/:survivorId/items', ItemsSurvivorController.index)

/**
 * @swagger
 * /login:
 *  get:
 *    description: Use to login
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/login', AuthenticationController.login)

/**
 * @swagger
 * /survivors/infected/percentage:
 *  get:
 *    description: Use to request infected survivors percentage
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors/infected/percentage', ReportController.infectedSurvivorsPercentage)

/**
 * @swagger
 * /survivors/items_amount/average:
 *  get:
 *    description: Use to request the average of items amount by survivor
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors/items_amount/average', ReportController.itemsKindAmountAverageBySurvivor)

/**
 * @swagger
 * /survivors/non_infected/percentage:
 *  get:
 *    description: Use request non infected survivors percentage
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors/non_infected/percentage', ReportController.nonInfectedSurvivorsPercentage)

/**
 * @swagger
 * /survivors/infected/points_lost:
 *  get:
 *    description: Use request poinst lost quantity of all survivors infected
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/survivors/infected/points_lost', ReportController.pointsLostBecauseInfect)

module.exports = routes;