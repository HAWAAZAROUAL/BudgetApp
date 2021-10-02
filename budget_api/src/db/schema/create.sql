DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  income INTEGER NOT NULL,
  income_type VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS incomes CASCADE;
CREATE TABLE incomes (
  id SERIAL PRIMARY KEY NOT NULL,
  income INTEGER NOT NULL,
  income_type VARCHAR(255) NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS budgets CASCADE;
CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  budget_limit INTEGER,
  start_date DATE,
  end_date DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories(
id SERIAL PRIMARY KEY NOT NULL,
category_type VARCHAR(255) NOT NULL,
amount INTEGER NOT NULL,
budget_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS expenses CASCADE;
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);