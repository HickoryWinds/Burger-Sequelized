module.exports = {

    "development": {
        "username": "root",
        "password": "root",
        "database": "burgers_db_sequelize",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
}
}

// use JAWSDB for database connection to heroku
