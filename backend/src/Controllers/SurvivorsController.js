const survivorService = require('../Services/survivorService')

module.exports = {
    async store(req, res) {
        try {
            const { name, age, latitude, longitude, items } = req.body

            const result = await survivorService.New({
                name: name,
                age: age,
                latitude: latitude,
                longitude: longitude,
                items: items
            })

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] }))
        }
    },

    async update(req, res) {
        try {
            const { id, name, age, latitude, longitude } = req.body

            const result = await survivorService.Update({
                id: id,
                name: name,
                age: age,
                latitude: latitude,
                longitude: longitude
            })

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] }))
        }
    }
}