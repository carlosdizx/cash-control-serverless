CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;

CREATE TABLE IF NOT EXISTS users
(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    type VARCHAR DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS categories
(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE IF NOT EXISTS transactions
(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    amount NUMERIC,
    date TIMESTAMP,
    description VARCHAR,
    user_id UUID REFERENCES users(id),
    category_id UUID REFERENCES categories(id)
);
