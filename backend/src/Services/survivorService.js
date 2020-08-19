const Survivors = require('../Models/Survivor')
const SurvivorItem = require('../Models/SurvivorItem')

const survivorItemService = require('./survivorItemService')
const itemsService = require('../Services/itemsService')

const cryptUtils = require('../utils/cryptUtils')
const arrayUtils = require('../utils/arrayUtils')

module.exports = {
    async GetAll() {

    const survivorsList = await Survivors.findAll();

    return { survivor: survivorsList }
},


    async GetById(id) {

        const survivorExists = await Survivors.findByPk(id);

        if (!survivorExists)
            throw new Error("There's no survivor with this id")

        return { survivor: survivorExists }
    },

    async New(survivor) {
        const availableItems = await itemsService.GetAll();

        let availableItemsIds = availableItems.map(a => a.dataValues.id)
        let itemsId = survivor.items.map(a => a.id)

        if (!arrayUtils.FirstArrayContainAllSecond(availableItemsIds, itemsId))
            return new Error("one or more of the items is not valid")

        return Promise.all([Survivors.create({
            name: survivor.name,
            age: survivor.age,
            latitude: survivor.latitude,
            longitude: survivor.longitude,
            password: await cryptUtils.EncryptToBcryptHash(survivor.password)
        })])
            .then(async function ([survivorSaved]) {

                const itemsSurvivorSaved = await survivorItemService.New({
                    items: survivor.items
                    , survivorId: survivorSaved.id
                })

                return { survivor: survivorSaved, items: itemsSurvivorSaved }
            })
            .catch(function (error) {

                throw new Error(error)
            })
    },

    async Infect(idSurvivor) {

        const reportsForInfectedStatus = 5

        const survivorExists = await Survivors.findByPk(idSurvivor);

        if (!survivorExists)
            throw new Error("There's no survivor with this id")

        if (survivorExists.times_infected_report >= reportsForInfectedStatus)
            throw new Error("Already infected person")

        survivorExists.times_infected_report = survivorExists.times_infected_report + 1

        const survivorUpdated = await Survivors.update({
            id: idSurvivor,
            name: survivorExists.name,
            age: survivorExists.age,
            latitude: survivorExists.latitude,
            longitude: survivorExists.longitude,
            infected: survivorExists.times_infected_report >= reportsForInfectedStatus ? true : false,
            times_infected_report: survivorExists.times_infected_report,
            password: survivorExists.password
        },
            {
                where: {
                    id: survivorExists.id
                }
            }
        )

        return { survivor: survivorUpdated }
    },

    async UpdateCoords(idSurvivor, latitude, longitude) {

        const survivorExists = await Survivors.findByPk(idSurvivor);

        if (!survivorExists)
            throw new Error("There's no survivor with this id")

        const survivorUpdated = await Survivors.update({
            id: idSurvivor,
            name: survivorExists.name,
            age: survivorExists.age,
            latitude: latitude,
            longitude: longitude,
            password: survivorExists.password
        },
            {
                where: {
                    id: idSurvivor
                }
            }
        )

        return { survivor: survivorUpdated }
    }

}