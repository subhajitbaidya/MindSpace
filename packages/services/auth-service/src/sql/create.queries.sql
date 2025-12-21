-- INSERT INTO users (fname, lname, email, password)
-- VALUES ('John', 'Doe', 'john@example.com', '123456');
ALTER TABLE users
ALTER COLUMN publicId TYPE VARCHAR(26);