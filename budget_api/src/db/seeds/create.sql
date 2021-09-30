Insert into users(first_name,last_name,email,income, income_type ) 
values('Alice','sdfds','light@mail.com',40000, 'job'),
('Grace','sdfds','light@mail.com',40000, 'job');


Insert into budgets(user_id, name, budget_limit, start_date, end_date) 
values
(1,'birthday', 600, '2021-07-15', '2021-07-30'),
(2, 'wedding', 5000, '2021-08-01', '2021-08-31'),
(2, 'pet', 5000, '2021-08-01', '2021-08-31'),
(2, 'car expences', 5000, '2021-08-01', '2021-08-31'),
(2, 'different', 5000, '2021-08-01', '2021-08-31'),
(1, 'pet', 150, '2021-09-18', '2021-09-25'),
(1, 'car expences', 400, '2021-09-01', '2021-09-10'),
(1, 'different', 500, '2021-09-05', '2021-09-09');


Insert into categories(category_type, amount, budget_id) 
values('birthday', 600, 9),
('wedding', 200, 10),
('car expences', 300, 12),
('gift', 50, 10),
('pet', 75,14);



Insert into incomes (income,income_type,date,user_id)
values(40000,'salary','2021-07-30',2),
(300,'Macdonald','2021-07-20',2),
(800,'lesson','2021-07-10',2),
(200,'clean','2021-07-08',2),
(41000,'salary','2021-08-30',2),
(100,'Macdonald','2021-08-20',2),
(200,'clean','2021-08-08',2),
(40000,'salary','2021-09-30',2),
(300,'Macdonald','2021-09-20',2),
(800,'lesson','2021-09-10',2),
(200,'clean','2021-09-08',2),
(41000,'salary','2021-06-30',2),
(100,'Macdonald','2021-06-20',2),
(200,'clean','2021-06-08',2);



Insert into expenses(category_id, date, amount,user_id)
 values 
 (1, '2021-10-23', 300,2),
(2, '2021-09-24', 50,2),
(3, '2021-09-21', 10,2),
(4, '2021-09-20', 0,2),
 (5, '2021-9-13', 300,2);
 