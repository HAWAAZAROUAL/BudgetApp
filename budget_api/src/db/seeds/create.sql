Insert into users(first_name,last_name,email,income, income_type ) 
values('Alice','sdfds','light@mail.com',40000, 'job'),
('Grace','sdfds','light@mail.com',40000, 'job');


Insert into budgets(user_id, name, budget_limit, start_date, end_date) 
values
(1,'Birthday', 600, '2021-07-15', '2021-07-30'),
(2, 'School supplies', 400, '2021-08-01', '2021-08-31'),
(2, 'Pet', 700, '2021-08-01', '2021-08-31'),
(2, 'Car expenses', 300, '2021-09-01', '2021-09-30');



Insert into categories(category_type, amount, budget_id) 
values('Birthday', 600, 1),
('School supplies', 200, 2),
('Car expenses', 300, 4),
('Pet', 75,3);



Insert into incomes (income,income_type,date,user_id)
values
(1200,'salary','2021-01-30',2),
(2000,'salary','2021-02-28',2),
(900,'salary','2021-03-30',2),
(1800,'salary','2021-04-30',2),
(2000,'salary','2021-05-30',2),
(1500,'Macdonald','2021-06-08',2),
(1300,'Painting','2021-07-20',2),
(3000,'salary','2021-08-30',2),
(2000,'clean','2021-09-08',2),
(1600,'salary','2021-10-1',2);


Insert into expenses(category_id, date, amount,user_id)
 values 
 (1, '2021-07-23', 300,2),
(2, '2021-08-24', 150,2),
(3, '2021-08-21', 200,2),
(4, '2021-09-20', 100,2);

 Insert into quotes (quote, author) 
 values
 ('If you would be wealthy, think of saving as well as getting.', 'Ben Franklin'),
 ('The money you have gives you freedom; the money you pursue enslaves you.', 'Jean-Jacques Rousseau'),
 ('Making money is a common sense. It’s not rocket science. But unfortunately, when it comes to money, common sense is uncommon.', 'Robert Kiyosaki'),
 ('If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed.', 'Edmund Burke'),
 ('Do not save what is left after spending, but spend what is left after saving.', 'Warren Buffett'),
 ('It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.', 'Robert Kiyosaki');
 
 