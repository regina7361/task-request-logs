-- Create the database task management db specified it for use.
CREATE database task_management_db;
USE task_management_db;

-- Create the table plans.
CREATE TABLE user
(
id int NOT NULL AUTO_INCREMENT,
userName VARCHAR(255) NOT NULL,
userPassword VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE boards
(
id int NOT NULL AUTO_INCREMENT,
board_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE lists
(
id int NOT NULL AUTO_INCREMENT,
board_name VARCHAR (255) NOT NULL,
lists VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE tasks
(
id int NOT NULL AUTO_INCREMENT,
task_type VARCHAR(255) NOT NULL,
task_title VARCHAR(255) NOT NULL,
task_priority INT NOT NULL DEFAULT 2,
created_date DATETIME,
due_date DATETIME,
assigned_to VARCHAR(255),
task_description VARCHAR(255),
board_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);
