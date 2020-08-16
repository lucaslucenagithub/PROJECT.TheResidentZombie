const { Model, DataTypes } = require('sequelize')

class SurvivorItem extends Model {
    static init(connection) {
        super.init({
            survivor_id: {
                type: DataTypes.INTEGER,
            },
            item_id: {
                type: DataTypes.INTEGER,
            },
            amount: {
                type: DataTypes.INTEGER,
            }
        }, {
            sequelize: connection,
            timestamps: false,
            tableName: 'survivor_item'
        })
    }

    static associate(models) {
        this.belongsTo(models.Survivor, { foreignKey: 'survivor_id' });
        this.belongsTo(models.Item, { foreignKey: 'item_id' });
    }
}

module.exports = SurvivorItem