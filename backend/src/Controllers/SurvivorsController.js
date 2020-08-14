const Survivors = require('../Models/Survivor')

module.exports = {
    async store(req, res) {
        const { name, age, latitude, longitude } = req.body

        const survivorSaved = await Survivors.create({ name, age, latitude, longitude })

        return res.json(survivorSaved);
    }
}