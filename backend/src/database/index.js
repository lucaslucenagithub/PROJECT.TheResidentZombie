const Sequelize = require('sequelize')
const dbConfig = require('../configurations/database')

// Models
const Survivors = require('../Models/Survivor')
const Item = require('../Models/Item')
const SurvivorItem = require('../Models/SurvivorItem')

var environment = process.env.NODE_ENV

var config = environment == 'test' ? dbConfig.test : dbConfig.development

const connection = new Sequelize(config)

// Models Init
Survivors.init(connection)
Item.init(connection)
SurvivorItem.init(connection)

// Models associate
Survivors.associate(connection.models);
Item.associate(connection.models);
SurvivorItem.associate(connection.models);

module.exports = connection