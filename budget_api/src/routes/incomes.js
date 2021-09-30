const router = require("express").Router();
module.exports = (db) => {

  router.get("/incomes", (request, response) => {

    db.query(`SELECT * FROM incomes`).then(({ rows: incomes }) => {

      response.json(
        incomes.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.put("/incomes/:userid", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { income,income_type } = request.body.incomes;
   
    db.query(
      `
          INSERT INTO incomes ( income,income_type,user_id ) VALUES (  $1::INTEGER, $2::TEXT ,$3::INTEGER) 
          `,
      [Number(income),income_type,Number(request.params.userid)]
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