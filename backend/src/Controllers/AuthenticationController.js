const authenticationService = require('../Services/authenticationService')

module.exports = {
    async login(req, res) {
        try {
            const { name, password } = req.body

            const result = await authenticationService.Login({
                name: name,
                password: password
            })

            return res.status(200).send({ result })

        } catch (error) {
            return res.status(400).send(({ message: error['message'] ? error['message'] : 'an error ocurred' }))
        }
    }
}