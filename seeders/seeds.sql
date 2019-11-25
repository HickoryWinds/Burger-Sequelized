USE burgers_db_sequelize;

INSERT INTO burgers (burger_name) values ('Monster Burger');
INSERT INTO burgers (burger_name) values ('Clam Burger');
INSERT INTO burgers (burger_name) values ('Meister Burger');

INSERT INTO customers (customer_name, burgerId) values ('Joe Smith', 1);
INSERT INTO customers (customer_name, burgerId) values ('John Doe', 1);
INSERT INTO customers (customer_name, burgerId) values ('Jane Does', 2);
