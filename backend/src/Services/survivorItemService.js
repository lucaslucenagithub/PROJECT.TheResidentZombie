const SurvivorItem = require('../Models/SurvivorItem')
const itemsService = require('./itemsService')
const { Error } = require('sequelize')

module.exports = {

    async New(survivorItems) {

        let itemsSaved = new Array()

        for (item of survivorItems.items) {
            itemsSaved.push(await SurvivorItem.create({
                survivor_id: survivorItems.survivorId,
                item_id: item.id,
                amount: item.amount
            }))
        }

        return itemsSaved

    },

    async GetByIdSurvivor(id) {

        const inventory = await SurvivorItem.findAll({
            where: {
                survivor_id: id
            },
            include: ['survivors', 'items']
        })

        if (inventory[0].survivor.infected)
            return new Error("Infected persons can't open the inventory")

        return inventory;
    }
}