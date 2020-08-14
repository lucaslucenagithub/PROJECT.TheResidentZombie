const { Model, DataTypes } = require('sequelize')

class Survivor extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            infected: DataTypes.BOOLEAN,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Survivor