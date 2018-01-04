module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
            customer: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        })
        // Customer.associate = function(models) {
        //     Customer.belongsTo(models.Cake)
        // };
    return Customer;
}