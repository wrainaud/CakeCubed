module.exports = function(sequelize, DataTypes) {
    var Cake = sequelize.define("Cake", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cake_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    Cake.associate = function(models) {
        Cake.hasMany(models.Customer)
    };
    return Cake;
}