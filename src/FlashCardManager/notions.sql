
USE learn;
CREATE TABLE flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(100),
    title VARCHAR(200),
    description VARCHAR(1000),
    creation_date TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
);