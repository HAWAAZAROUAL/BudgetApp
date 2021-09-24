Insert into users(first_name,last_name,email,income, income_type) values('Alice','sdfds','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('Grace','wang','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('Yolanda','dfds','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('rose','sdfs','light@mail.com',40000,'job');
Insert into users(first_name,last_name,email,income, income_type) values('fei','han','light@mail.com',40000,'job');

Insert into budgets(user_id, name, budget_limit, start_date, end_date) values(1,'birthday', 600, '2021-07-15', '2021-07-30'),
values(2, 'wedding', 5000, '2021-08-01', '2021-08-31'),
values(3, 'pet', 150, '2021-09-18', '2021-09-25'),
values(4, 'car expences', 400, '2021-09-01', '2021-09-10'),
values(5, 'different', 500, '2021-09-05', '2021-09-09')


Insert into categories(category_type, amount, budget_id) values('Food', 150, ),
values ('gas', 200),
values ('groceries', 300),
values ('gift', 50),
values ('pet', 75);

Insert into expenses(category_id, date, amount) values (1, '2021-09-23', 300),
values (2, '2021-09-24', 50),
values (3, '2021-09-21', 10),
values (4, '2021-09-20', 0),
values (5, '2021-09-19', 5);