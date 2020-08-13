const Sequelize = require('sequelize')
const dbConfig = require('../configurations/database')

const connection = new Sequelize(dbConfig)

module.exports = connection