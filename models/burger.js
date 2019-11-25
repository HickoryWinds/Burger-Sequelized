
module.exports = function(sequelize, DataTypes){
    var burgers = sequelize.define('burgers', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    message: 'Name must be between 1 and 50 characters in length.'
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // one burger can have many customers devour it
    burgers.associate = function(models){
        console.log(models);
        console.log(models.customers);
        burgers.hasMany(models.customers,{
            onDelete: 'cascade'
        });
    };
    return burgers;
};

console.log('3');