const SurvivorItem = require('../Models/SurvivorItem')

const Survivor = require('../Models/Survivor')
const Item = require('../Models/Item')

module.exports = {

    async infectedSurvivorsPercentage() {

        const allSurvivors = (await Survivor.findAll())

        const survivorsInfected = allSurvivors.filter((x) => (
            x.dataValues.infected
        ))

        const result = (survivorsInfected.length / allSurvivors) * 100

        return result
    },

    async nonInfectedSurvivorsPercentage() {

        const allSurvivors = (await Survivor.findAll())

        const survivorsNonInfected = allSurvivors.filter((x) => (
            !x.dataValues.infected
        ))

        const result = (survivorsNonInfected.length / allSurvivors) * 100

        return result
    },

    async itemsKindAmountAverageBySurvivor() {

        const allSurvivorsCount = (await Survivor.findAll()).length

        const itemsKinds = await Item.findAll()

        const itemsSurvivors = (await SurvivorItem.findAll())

        const result = []

        for (const itemKind of itemsKinds) {

            let itemFilteredByKind = itemsSurvivors.filter((x) => (
                x.dataValues.item_id == itemKind.dataValues.id
            ))

            let itemKIndAmountsSum = itemFilteredByKind.reduce(function (a, b) {
                return a + b;
            }, 0);

            let amountAverageBySurvivor = itemKIndAmountsSum / allSurvivorsCount

            result.push({
                item: itemKind.dataValues.name,
                amountAverageBySurvivor: amountAverageBySurvivor
            })
        }

        return result
    },

    async pointsLostBecauseInfect() {

        const survivorsInfectedInventory = (await SurvivorItem.findAll(
            {
                include: [{
                    model: Survivor,
                    where: { infected: true }
                }]
            },
            {
                include: [{
                    model: Item
                }]
            }
        ))

        const amountTimePoints = survivorsInfectedInventory.reduce(function (a, b) {
            return a * b;
        }, 0);

        const result = amountTimePoints.reduce(function (a, b) {
            return a + b;
        }, 0);

        return result
    }
}