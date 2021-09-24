DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  income INTEGER,
  income_type VARCHAR(255) NOT NULL
);

CREATE TABLE mainExpenses (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE,
  category VARCHAR(255) NOT NULL,
  amount INTEGER
)

-- CREATE TABLE balance

CREATE TABLE specialBudget (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  budget_limit INTEGER
  start_date DATE,
  end_date DATE
);

CREATE TABLE categories(
id SERIAL PRIMARY KEY NOT NULL,
category_type VARCHAR(255) NOT NULL,
amount INTEGER
)