
module.exports = function(sequelize, DataTypes){
    // define burgers table in database
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

    //  one burger can have many customers devour it using hasMany association
    burgers.associate = function(models){
        burgers.hasMany(models.customers,{
            // if a burger is deleted the associated information if deleted
            onDelete: 'cascade'
        });
    };
    return burgers;
};
