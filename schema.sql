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
  status VARCHAR(50) NOT NULL,
  date DATE NOT NULL
);

-- Create the revenue table
CREATE TABLE revenue (
  month VARCHAR(4) NOT NULL,
  revenue INT NOT NULL
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
  ((SELECT id FROM customers WHERE name = 'Delba de Oliveira'), 15795, 'pending', '2023-12-16'),
  ((SELECT id FROM customers WHERE name = 'Lee Robinson'), 20348, 'paid', '2023-11-14'),
  ((SELECT id FROM customers WHERE name = 'Hector Simpson'), 3040, 'paid', '2023-10-29'),
  ((SELECT id FROM customers WHERE name = 'Steven Tey'), 44800, 'paid', '2023-10-04'),
  ((SELECT id FROM customers WHERE name = 'Steph Dietz'), 34577, 'pending', '2023-10-01'),
  ((SELECT id FROM customers WHERE name = 'Michael Novotny'), 54246, 'pending', '2023-09-21'),
  ((SELECT id FROM customers WHERE name = 'Evil Rabbit'), 666, 'pending', '2023-09-17'),
  ((SELECT id FROM customers WHERE name = 'Emil Kowalski'), 32545, 'paid', '2023-09-07'),
  ((SELECT id FROM customers WHERE name = 'Amy Burns'), 1250, 'paid', '2023-08-19'),
  ((SELECT id FROM customers WHERE name = 'Balazs Orban'), 8945, 'paid', '2023-08-18'),
  ((SELECT id FROM customers WHERE name = 'Delba de Oliveira'), 5000, 'paid', '2023-08-01'),
  ((SELECT id FROM customers WHERE name = 'Lee Robinson'), 8945, 'pending', '2023-07-22'),
  ((SELECT id FROM customers WHERE name = 'Hector Simpson'), 8945, 'paid', '2023-07-18'),
  ((SELECT id FROM customers WHERE name = 'Steven Tey'), 8945, 'paid', '2023-07-05'),
  ((SELECT id FROM customers WHERE name = 'Steph Dietz'), 8945, 'pending', '2023-06-29'),
  ((SELECT id FROM customers WHERE name = 'Michael Novotny'), 8945, 'paid', '2023-06-24'),
  ((SELECT id FROM customers WHERE name = 'Evil Rabbit'), 8945, 'paid', '2023-06-20'),
  ((SELECT id FROM customers WHERE name = 'Emil Kowalski'), 8945, 'pending', '2023-06-17'),
  ((SELECT id FROM customers WHERE name = 'Amy Burns'), 8945, 'paid', '2023-06-10'),
  ((SELECT id FROM customers WHERE name = 'Balazs Orban'), 8945, 'paid', '2023-06-05');

INSERT INTO revenue (month, revenue) VALUES
  ('Jan', 2000),
  ('Feb', 1800),
  ('Mar', 2200),
  ('Apr', 2500),
  ('May', 3200),
  ('Jun', 3500),
  ('Jul', 3700),
  ('Aug', 4200),
  ('Sep', 3800),
  ('Oct', 4100),
  ('Nov', 4500),
  ('Dec', 4800);