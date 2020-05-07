### Schema

CREATE DATABASE burgerApp_db;
USE burgerApp_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
