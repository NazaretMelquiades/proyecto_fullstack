-- QUERIES FOR USERS:

--TABLE USERS:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    logged BOOLEAN DEFAULT FALSE
);

-- CREATE USUARIOS: / SIGNUP
INSERT INTO users (username, email, password, role, logged)
VALUES ('naza', 'naza@demo', 'hashedpassword13', 'user', false); --example

-- OBTAIN USER EMAIL FOR LOGIN
SELECT * FROM users WHERE email 

-- LOGIN
UPDATE users
SET logged = TRUE
WHERE email = 'correo@example.com'

-- LOGOUT
UPDATE users
SET logged = FALSE
WHERE email = 'correo@example.com'

-- GET USER BY ID
SELECT *FROM users
WHERE id = 1;


-- QUERIES FOR FAVORITES

-- CREATE TABLE FAVORITES:
CREATE TABLE favorites ( 
id SERIAL PRIMARY KEY, 
user_id INTEGER NOT NULL, 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, 
recipes_id VARCHAR(100) NOT NULL, 
UNIQUE (user_id, recipes_id)
);

-- 1. GET ALL FAVORITES BY ID
SELECT recipes_id
FROM favorites
WHERE user_id = 1

-- 2. ADD FAVORITES
INSERT INTO favorites (user_id, recipes_id)
VALUES (1, 'tt0111161') --example
RETURNING *;

-- 3. ELIMINAR FAVORITOS
DELETE FROM favorites
WHERE user_id = 1
AND recipes_id = 2
RETURNING *;

