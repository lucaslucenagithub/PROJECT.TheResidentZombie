const Sequelize = require('sequelize')
const dbConfig = require('../configurations/database')

// Models
const Survivors = require('../Models/Survivor')

var environment = process.env.NODE_ENV

var config = environment == 'test' ? dbConfig.test : dbConfig.development

const connection = new Sequelize(config)

// Models Init
Survivors.init(connection)

module.exports = connection