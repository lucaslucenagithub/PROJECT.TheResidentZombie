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

                            done();
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
        }, {
            sequelize: connection
        })
    }
}

module.exports = Survivor