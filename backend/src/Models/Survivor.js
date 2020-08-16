const { Model, DataTypes } = require('sequelize')

class Survivor extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    isUnique: function (name, done) {
                        Survivor.findOne({
                            where: { name: name }
                        }).then(function (survivor) {
                            if (survivor)
                                done(new Error("A Survivor already picked that name"))

                            done()
                        })
                    },
                    len: [6, 14],
                    notEmpty: true,
                }
            },
            age: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                    min: 1,
                }
            },
            latitude: {
                type: DataTypes.STRING, validate: {
                    notEmpty: true,
                }
            },
            longitude: {
                type: DataTypes.STRING, validate: {
                    notEmpty: true,
                }
            },
            infected: DataTypes.BOOLEAN,
            times_infected_report: DataTypes.INTEGER,
            password: {
                type: DataTypes.STRING,
                notEmpty: true,
                validate: {
                    notEmpty: function (pass, done) {
                        if (!pass || pass == "")
                            done(new Error('password is required'))

                        done()
                    }
                }
            }
        }, {
            sequelize: connection
        }

        )
    }

    static associate(models) {
        this.hasMany(models.SurvivorItem, { foreignKey: 'survivor_id' })
    }
}

module.exports = Survivor