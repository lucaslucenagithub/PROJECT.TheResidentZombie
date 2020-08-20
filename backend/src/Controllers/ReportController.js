const reportService = require('../Services/reportService')

module.exports = {
    async infectedSurvivorsPercentage(res) {
        try {
            const result = reportService.infectedSurvivorsPercentage()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async nonInfectedSurvivorsPercentage(res) {
        try {
            const result = reportService.nonInfectedSurvivorsPercentage()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async itemsKindAmountAverageBySurvivor(res) {
        try {
            const result = reportService.itemsKindAmountAverageBySurvivor()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async pointsLostBecauseInfect(res) {
        try {
            const result = reportService.pointsLostBecauseInfect()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}