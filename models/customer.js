
module.exports = function(sequelize, DataTypes){
    // define customers table in database
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
        // keep table name from being pluralized by sequelize
        freezeTableName: true
    });
    
    // A customer belongs to a specific burger using belongs to association
    customers.associate = function(models){
        customers.belongsTo(models.burgers, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return customers;
};
    