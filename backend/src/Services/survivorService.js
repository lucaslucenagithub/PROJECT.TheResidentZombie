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
    },

    async Update(survivor) {

        const survivorExists = await Survivors.findByPk(survivor.id);

        if (!survivorExists)
            return new Error("There's no survivor with this id")

        const survivorUpdated = await Survivors.update({
            name: survivor.name,
            age: survivor.age,
            latitude: survivor.latitude,
            longitude: survivor.longitude
        },
            {
                where: {
                    id: survivor.id
                }
            }
        )

        return { survivor: survivorUpdated }
    },

    async Infect(idSurvivor) {

        const reportsForInfectedStatus = 5

        const survivorExists = await Survivors.findByPk(idSurvivor);

        if (!survivorExists)
            return new Error("There's no survivor with this id")

        if (survivorExists.times_infected_report >= reportsForInfectedStatus)
            return new Error("Already infected person")

        survivorExists.times_infected_report = survivorExists.times_infected_report + 1

        const survivorUpdated = await Survivors.update({
            name: survivorExists.name,
            age: survivorExists.age,
            latitude: survivorExists.latitude,
            longitude: survivorExists.longitude,
            infected: survivorExists.times_infected_report >= reportsForInfectedStatus ? true : false,
            times_infected_report: survivorExists.times_infected_report
        },
            {
                where: {
                    id: survivorExists.id
                }
            }
        )

        return { survivor: survivorUpdated }
    }

}