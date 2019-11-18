CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT PRIMARY KEY,
  room_name TEXT
);

CREATE TABLE users (
  id INT PRIMARY KEY,
  user_name TEXT
  -- messages INT
  -- FOREIGN KEY(messages) REFERENCES messages(id)
);

CREATE TABLE messages (
  id INT PRIMARY KEY,
  room_name INT,
  user_name INT,
  message_text TEXT,
  FOREIGN KEY(room_name) REFERENCES rooms(id),
  FOREIGN KEY(user_name) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

