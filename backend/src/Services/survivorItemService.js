const SurvivorItem = require('../Models/SurvivorItem')

const Survivor = require('../Models/Survivor')
const Item = require('../Models/Item')

module.exports = {

    async New(survivorItems) {

        let itemsSaved = new Array()

        for (let item of survivorItems.items) {
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
            include: [Survivor, Item]
        })

        if (inventory[0].dataValues.Survivor.dataValues.infected)
            throw new Error("Infected persons can't open the inventory")

        let items = new Array()

        for (let index = 0; index < inventory.length; index++) {
            items.push(inventory[index].dataValues.Item)
            items[index].dataValues.amount = inventory[index].dataValues.amount
        }

        return items;
    }
}