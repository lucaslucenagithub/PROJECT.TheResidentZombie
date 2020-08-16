const survivorItemService = require('../Services/survivorItemService')

module.exports = {
    async index(req, res) {
        try {

            const { survivorId } = req.params

            var result = await survivorItemService.GetByIdSurvivor(survivorId)

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}