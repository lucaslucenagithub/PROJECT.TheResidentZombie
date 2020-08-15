const Survivors = require('../Models/Survivor')

const itemsService = require('../Services/itemsService')
const survivorItemService = require('../Services/survivorItemService')

const arrayUtils = require('../utils/arrayUtils')

module.exports = {

    async New(survivor) {
        const availableItems = await itemsService.GetAll();

        let availableItemsIds = availableItems.map(a => a.dataValues.id)
        let itemsId = survivor.items.map(a => a.id)

        if (!arrayUtils.FirstArrayContainAllSecond(availableItemsIds, itemsId))
            return new Error("one or more of the items is not valid")

        const survivorSaved = await Survivors.create({
            name: survivor.name,
            age: survivor.age,
            latitude: survivor.latitude,
            longitude: survivor.longitude
        })

        const itemsSaved = await survivorItemService.New({
            survivorId: survivorSaved.id,
            items: survivor.items
        })

        return { survivor: survivorSaved, items: itemsSaved }
    }

}