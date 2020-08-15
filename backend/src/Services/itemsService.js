const Item = require('../Models/Item')

module.exports = {

    async GetAll() {
        return await Item.findAll()
    }

}