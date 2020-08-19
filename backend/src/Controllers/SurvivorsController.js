const survivorService = require('../Services/survivorService')

module.exports = {
    async show(req, res) {
        try {
            const result = await survivorService.GetAll()

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async index(req, res) {
        try {
            const { id } = req.params

            const result = await survivorService.GetById(id)

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async store(req, res) {
        try {
            const { name, age, password, latitude, longitude, items } = req.body

            const result = await survivorService.New({
                name: name,
                age: age,
                latitude: latitude,
                longitude: longitude,
                items: items,
                password: password
            })

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async infect(req, res) {
        try {
            const { survivorId } = req.params;

            const result = await survivorService.Infect(survivorId)

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    },

    async updateCoords(req, res) {
        try {
            const { id, latitude, longitude } = req.body

            const result = await survivorService.UpdateCoords(
                id,
                latitude,
                longitude
            )

            return res.json(result);

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}