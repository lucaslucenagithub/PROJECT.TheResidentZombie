const itemsService = require('../Services/itemsService')

module.exports = {
    async store(req, res) {
        try {
            const { name, age, latitude, longitude, items } = req.body

            const newSurvivor = { name, age, latitude, longitude, items }

            const result = await survivorService.New(newSurvivor)            

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] }))
        }
    }
}