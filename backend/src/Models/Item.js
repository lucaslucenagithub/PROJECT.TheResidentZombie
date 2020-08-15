const { Model, DataTypes } = require('sequelize')

class Item extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
            },
            points: {
                type: DataTypes.INTEGER,
            }
        }, {
            sequelize: connection,
            timestamps: false
        })
    }
}

module.exports = Item