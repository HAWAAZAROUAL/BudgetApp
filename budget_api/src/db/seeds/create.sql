Insert into users(first_name,last_name,email,income, income_type) values('Alice','sdfds','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('Grace','wang','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('Yolanda','dfds','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('rose','sdfs','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('fei','han','light@mail.com',40000,'job');

Insert into budgets(user_id, name, budget_limit, start_date, end_date) values(1,'birthday', 600, '2021-07-15', '2021-07-30'),
(2, 'wedding', 5000, '2021-08-01', '2021-08-31'),
(3, 'pet', 150, '2021-09-18', '2021-09-25'),
(4, 'car expences', 400, '2021-09-01', '2021-09-10'),
(5, 'different', 500, '2021-09-05', '2021-09-09');


Insert into categories(category_type, amount, budget_id) values('Food', 150, 185),
('wedding', 200, 123),
('car expences', 300, 184),
('gift', 50, 127),
('pet', 75, 126);

Insert into expenses(category_id, date, amount)
 values 
 (11, '2021-10-23', 300),
(12, '2021-09-24', 50),
(13, '2021-09-21', 10),
(14, '2021-09-20', 0),
 (11, '2021-10-13', 300),
(12, '2021-10-24', 50),
(13, '2021-10-21', 10),
(14, '2021-08-20', 0);