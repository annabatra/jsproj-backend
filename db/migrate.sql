-- sql code, sqlite db

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    depot INT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    cookie1 INT,
    cookie2 INT,
    cookie3 INT,
    UNIQUE(email)
);

DROP TABLE IF EXISTS cookies;
CREATE TABLE IF NOT EXISTS cookies (
    id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    image VARCHAR(300) NOT NULL,
    price INT(5) NOT NULL,
    description VARCHAR(1000)
);

INSERT INTO cookies
    (id, title, image, price, description)
VALUES
    (1, "Chocolate Chip", "chocolatechip.jpg", 10, "Innehåller bitar av choklad"),
    (2, "Red Velvet", "redvelvet.jpg", 12, "En röd kaka med härliga smaker"),
    (3, "Grinch Cookies", "grinch.jpg", 15, "En grön kaka med jultema")
;
