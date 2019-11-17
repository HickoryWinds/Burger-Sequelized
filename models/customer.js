
module.exports = function(sequelize, DataTypes){
    var customer = sequelize.define('customers', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    message: 'Name must be between 1 and 50 characters in length.'
                }
            }
        }
    });
    
    // A customer belongs to a burger
    customer.associate = function(models){
        customer.belongsTo(models.burger, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return customer;
};
    
console.log('10');