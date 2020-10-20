-- sql code, sqlite db

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    depot INT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);


CREATE TABLE IF NOT EXISTS cookies (
    id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(1000)
);

INSERT INTO cookies
    (id, title, description)
VALUES
    (1, "Chocolate Chip", "containing chocolate chips, yummie"),
    (2, "Red Velvet", "A red cookie"),
    (3, "Grinch Cookies", "A green cookie, stealing christmas")
;
