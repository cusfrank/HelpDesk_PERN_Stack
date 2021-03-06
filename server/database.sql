CREATE DATABASE HelpDesk_PERN_Stack;

CREATE TABLE admin(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE customer(
  id SERIAL PRIMARY KEY,
  ticket_code VARCHAR(8) NOT NULL UNIQUE
);

CREATE TABLE chat_log(
  id SERIAL PRIMARY KEY,
  id_customer INTEGER NOT NULL,
  message VARCHAR(255) NOT NULL,
  id_admin INTEGER
);

CREATE EXTENSION pgcrypto;