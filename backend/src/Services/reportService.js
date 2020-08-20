const SurvivorItem = require('../Models/SurvivorItem')

const Survivor = require('../Models/Survivor')
const Item = require('../Models/Item')

module.exports = {

    async infectedSurvivorsPercentage() {

        const allSurvivors = (await Survivor.findAll())

        const survivorsInfected = allSurvivors.filter((x) => (
            x.dataValues.infected
        ))

        const result = (survivorsInfected.length / allSurvivors.length) * 100

        return result
    },

    async nonInfectedSurvivorsPercentage() {

        const allSurvivors = (await Survivor.findAll())

        const survivorsNonInfected = allSurvivors.filter((x) => (
            !x.dataValues.infected
        ))

        const result = (survivorsNonInfected.length / allSurvivors.length) * 100

        return result
    },

    async itemsKindAmountAverageBySurvivor() {

        const allSurvivorsCount = (await Survivor.findAll()).length

        const itemsKinds = await Item.findAll()

        const itemsSurvivors = (await SurvivorItem.findAll())

        const result = []

        for (const itemKind of itemsKinds) {

            const itemFilteredByKind = itemsSurvivors.filter((x) => (
                x.dataValues.item_id == itemKind.dataValues.id
            )).map(a => a.dataValues.amount)

            let itemKindAmountsSum = (itemFilteredByKind.reduce(function (a, b) {
                return a + b
            }, 0))

            let amountAverageBySurvivor = itemKindAmountsSum / allSurvivorsCount

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
                },
                {
                    model: Item
                }]
            }
        )).map((a) => ({points: a.dataValues.Item.dataValues.points, amount: a.dataValues.amount}))

        const sumAmountTimePoints = survivorsInfectedInventory.reduce(function (a, b) {
            return a + (b.amount * b.points);
        }, 0)

        return sumAmountTimePoints
    }
}