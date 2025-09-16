-- Create the customers table
CREATE TABLE customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL
);

-- Create the invoices table
CREATE TABLE invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID NOT NULL,
  amount INT NOT NULL,
  status VARCHAR(255) NOT NULL,
  date DATE NOT NULL
);

-- Create the revenue table
CREATE TABLE revenue (
  month VARCHAR(4) NOT NULL,
  revenue INT NOT NULL
);

-- Create the users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insert sample data
INSERT INTO customers (name, email, image_url) VALUES
  ('Delba de Oliveira', 'delba@oliveira.com', '/customers/delba-de-oliveira.png'),
  ('Lee Robinson', 'lee@robinson.com', '/customers/lee-robinson.png'),
  ('Hector Simpson', 'hector@simpson.com', '/customers/hector-simpson.png'),
  ('Steven Tey', 'steven@tey.com', '/customers/steven-tey.png'),
  ('Steph Dietz', 'steph@dietz.com', '/customers/steph-dietz.png'),
  ('Michael Novotny', 'michael@novotny.com', '/customers/michael-novotny.png'),
  ('Evil Rabbit', 'evil@rabbit.com', '/customers/evil-rabbit.png'),
  ('Emil Kowalski', 'emil@kowalski.com', '/customers/emil-kowalski.png'),
  ('Amy Burns', 'amy@burns.com', '/customers/amy-burns.png'),
  ('Balazs Orban', 'balazs@orban.com', '/customers/balazs-orban.png');

INSERT INTO invoices (customer_id, amount, status, date) VALUES
  ((SELECT id FROM customers WHERE name = 'Delba de Oliveira'), 15795, 'pending', '2023-12-06'),
  ((SELECT id FROM customers WHERE name = 'Lee Robinson'), 20348, 'pending', '2023-11-14'),
  ((SELECT id FROM customers WHERE name = 'Hector Simpson'), 3040, 'paid', '2023-10-29'),
  ((SELECT id FROM customers WHERE name = 'Steven Tey'), 44800, 'paid', '2023-10-04'),
  ((SELECT id FROM customers WHERE name = 'Steph Dietz'), 34577, 'pending', '2023-10-01'),
  ((SELECT id FROM customers WHERE name = 'Michael Novotny'), 54246, 'pending', '2023-09-21'),
  ((SELECT id FROM customers WHERE name = 'Evil Rabbit'), 666, 'pending', '2023-06-27'),
  ((SELECT id FROM customers WHERE name = 'Emil Kowalski'), 32545, 'paid', '2023-06-09'),
  ((SELECT id FROM customers WHERE name = 'Amy Burns'), 1250, 'paid', '2023-06-07'),
  ((SELECT id FROM customers WHERE name = 'Balazs Orban'), 8546, 'paid', '2023-06-03'),
  ((SELECT id FROM customers WHERE name = 'Delba de Oliveira'), 5000, 'paid', '2023-08-19'),
  ((SELECT id FROM customers WHERE name = 'Lee Robinson'), 8944, 'paid', '2023-06-18'),
  ((SELECT id FROM customers WHERE name = 'Hector Simpson'), 5000, 'paid', '2023-06-08'),
  ((SELECT id FROM customers WHERE name = 'Steven Tey'), 8944, 'paid', '2023-06-01'),
  ((SELECT id FROM customers WHERE name = 'Steph Dietz'), 8944, 'paid', '2023-05-18'),
  ((SELECT id FROM customers WHERE name = 'Michael Novotny'), 8944, 'paid', '2023-05-11'),
  ((SELECT id FROM customers WHERE name = 'Evil Rabbit'), 8944, 'paid', '2023-05-01'),
  ((SELECT id FROM customers WHERE name = 'Emil Kowalski'), 8944, 'paid', '2023-04-27'),
  ((SELECT id FROM customers WHERE name = 'Amy Burns'), 8944, 'paid', '2023-04-21'),
  ((SELECT id FROM customers WHERE name = 'Balazs Orban'), 8944, 'paid', '2023-04-15'),
  ((SELECT id FROM customers WHERE name = 'Delba de Oliveira'), 8944, 'paid', '2023-04-01'),
  ((SELECT id FROM customers WHERE name = 'Lee Robinson'), 8944, 'paid', '2023-03-24'),
  ((SELECT id FROM customers WHERE name = 'Hector Simpson'), 8944, 'paid', '2023-03-16'),
  ((SELECT id FROM customers WHERE name = 'Steven Tey'), 8944, 'paid', '2023-03-09'),
  ((SELECT id FROM customers WHERE name = 'Steph Dietz'), 8944, 'paid', '2023-02-24'),
  ((SELECT id FROM customers WHERE name = 'Michael Novotny'), 8944, 'paid', '2023-02-16'),
  ((SELECT id FROM customers WHERE name = 'Evil Rabbit'), 8944, 'paid', '2023-02-09'),
  ((SELECT id FROM customers WHERE name = 'Emil Kowalski'), 8944, 'paid', '2023-02-01'),
  ((SELECT id FROM customers WHERE name = 'Amy Burns'), 8944, 'paid', '2023-01-27'),
  ((SELECT id FROM customers WHERE name = 'Balazs Orban'), 8944, 'paid', '2023-01-21');

INSERT INTO revenue (month, revenue) VALUES
  ('Jan', 2000),
  ('Feb', 1800),
  ('Mar', 2200),
  ('Apr', 2500),
  ('May', 2300),
  ('Jun', 3200),
  ('Jul', 3500),
  ('Aug', 3700),
  ('Sep', 2500),
  ('Oct', 2800),
  ('Nov', 3000),
  ('Dec', 4800);

INSERT INTO users (name, email, password) VALUES
  ('Admin User', 'admin@nextjs.com', 'password123');
