CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  id VARCHAR PRIMARY KEY,
  name VARCHAR(256),
  price DECIMAL(8,2),
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

