const Sequelize = require('sequelize')
const dbConfig = require('../configurations/database')

// Models
const Survivors = require('../Models/Survivor')

const connection = new Sequelize(dbConfig)

// Models Init
Survivors.init(connection)

module.exports = connection