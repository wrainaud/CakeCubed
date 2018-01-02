module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Customer.hasMany(models.Cake, { as: 'cakes' })
            }
        }
    });
    return Customer;
};