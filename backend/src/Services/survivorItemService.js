const SurvivorItem = require('../Models/SurvivorItem')

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

    }
}