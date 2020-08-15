const itemsService = require('../Services/itemsService')

module.exports = {
    async show(req, res) {
        try {            
            var result = await itemsService.GetAll()

            return res.json(result)

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}