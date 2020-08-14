const Survivors = require('../Models/Survivor')

module.exports = {
    async store(req, res) {
        try {
            const { name, age, latitude, longitude } = req.body

            const survivorSaved = await Survivors.create({ name, age, latitude, longitude })
            
            return res.json(survivorSaved);
            
        } catch (error) {
            return res.status(400).send(({ error }))
        }
    }
}