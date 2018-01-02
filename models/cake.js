module.exports = function(sequelize, DataTypes) {
    var Cake = sequelize.define("Cake", {
        cake_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Cake.hasOne(models.Customer);
            }
        }
    });
    return Cake;
};