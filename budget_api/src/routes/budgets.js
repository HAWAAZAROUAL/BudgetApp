const { id } = require("date-fns/locale");
const router = require("express").Router();

module.exports = (db) => {

  router.get("/budgets", (request, response) => {

    db.query(`
    select categories.id as category_id,budgets.*,categories.amount from categories 
    join budgets on categories.budget_id= budgets.id;`
    ).then(({ rows: budgets }) => {
      
      response.json(
        budgets.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.put("/budgets/:userid", (request, response) => {


    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { name, budget_limit, start_date, end_date } = request.body.budget;

    db.query(
      `
          INSERT INTO budgets ( name,budget_limit, start_date,end_date,user_id) VALUES ($1::TEXT, $2::INTEGER, $3::DATE,$4::DATE,$5::INTEGER) returning *;
          `,
      [name, Number(budget_limit), start_date, end_date, Number(request.params.userid)]
    )
      .then((data) => {
        
        const budgetId=data.rows[0]["id"];
        db.query(
          `
              INSERT INTO categories ( category_type ,amount ,budget_id) VALUES ($1::TEXT, $2::INTEGER,  $3::INTEGER) returning *;
              `,
          [name, Number(budget_limit),  Number(budgetId)]
        )
        setTimeout(() => {
          response.status(204).json({});

        }, 1000);
      })
      .catch(error => console.log(error));
  });

  router.delete("/budgets/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    db.query(`DELETE FROM budgets WHERE id = $1::integer`, [
      request.params.id
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});

      }, 1000);
    });
  });


 router.put("/budgets/:userid/:budgetid", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { name, budget_limit, start_date, end_date } = request.body.budget;

    db.query(
      ` UPDATE budgets SET 
        name = $1::text, 
        budget_limit = $2::integer,
         
        user_id=$3::integer
      where id=$4::integer`,
      [name, Number(budget_limit),   Number(request.params.userid),Number(request.params.budgetid)]
      )
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
        }, 1000);
      })
      .catch(error => console.log(error));
  });

 



  return router;
}