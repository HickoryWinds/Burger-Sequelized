
module.exports = function(sequelize, DataTypes){
    var customers = sequelize.define('customers', {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    message: 'Name must be between 1 and 50 characters in length.'
                }
            }
        }
    },{
        freezeTableName: true
    });
    
    // A customer belongs to a burger
    customers.associate = function(models){
        customers.belongsTo(models.burgers, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return customers;
};
    
console.log('10');