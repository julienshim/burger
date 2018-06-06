CREATE DATABASE burgers_db;
--    * Create the `burgers_db`.

USE burgers_db;
--    * Switch to or use the `burgers_db`.

CREATE TABLE burgers
--    * Create a `burgers` table with these fields:
(
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
    --      * **id**: an auto incrementing int that serves as the primary key.
	burger_name VARCHAR(255) NOT NULL,
    --      * **burger_name**: a string.
	devoured BOOLEAN DEFAULT FALSE,
    --      * **devoured**: a boolean.
    date TIMESTAMP NOT NULL,
    --      * **date**: a TIMESTAMP.
	PRIMARY KEY (id)
);

