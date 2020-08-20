const reportService = require('../Services/reportService')

module.exports = {
    async infectedSurvivorsPercentage(req, res) {
        try {
            const result = await reportService.infectedSurvivorsPercentage()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async nonInfectedSurvivorsPercentage(req, res) {
        try {
            const result = await reportService.nonInfectedSurvivorsPercentage()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async itemsKindAmountAverageBySurvivor(req, res) {
        try {
            const result = await reportService.itemsKindAmountAverageBySurvivor()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async pointsLostBecauseInfect(req, res) {
        try {
            const result = await reportService.pointsLostBecauseInfect()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}