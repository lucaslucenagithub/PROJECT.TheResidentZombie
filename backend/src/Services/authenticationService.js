const Survivors = require('../Models/Survivor')

const cryptUtils = require('../utils/cryptUtils')

const bcrypt = require('bcrypt')

module.exports = {

    async Login(login) {

        const survivorExists = await Survivors.findOne({
            where: { name: login.name }
        });

        if (!survivorExists)
            throw new Error("Username invalid")

        const match = await bcrypt.compare(login.password, survivorExists.dataValues.password);

        if (!match)
            throw new Error("Password invalid")

        return { message: "Logged in", id: survivorExists.id }
    }
}