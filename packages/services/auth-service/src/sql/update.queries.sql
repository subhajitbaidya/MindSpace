UPDATE users
SET lname = 'Doe'
WHERE email = 'john@example.com'
RETURNING *;