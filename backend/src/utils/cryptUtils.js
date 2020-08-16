const bcrypt = require('bcrypt')

const salt = 10;

module.exports = {
    async EncryptToBcryptHash(value) {
        return bcrypt.hashSync(value, salt)
    }
}