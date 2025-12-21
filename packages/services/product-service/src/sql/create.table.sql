CREATE TABLE IF NOT EXISTS products (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100),
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    category VARCHAR(50),
    rating NUMERIC(2, 1) CHECK (
        rating BETWEEN 0 AND 5
    ),
    reviews INT DEFAULT 0 CHECK (reviews >= 0),
    image TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);