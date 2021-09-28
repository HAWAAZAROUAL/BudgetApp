const { id } = require("date-fns/locale");

const router = require("express").Router();

module.exports = (db) => {

  router.get("/expenses", (request, response) => {
  
    db.query(`SELECT * FROM expenses`).then(({ rows: expenses}) => {
      
      response.json(
        expenses.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.put("/expenses", (request, response) => {
     
    console.log(request.body);
        if (process.env.TEST_ERROR) {
          setTimeout(() => response.status(500).json({}), 1000);
          return;
        }
        const {date, amount } = request.body.expenses;
       
        db.query(
          `
          INSERT INTO expenses ( date, amount) VALUES ($1::DATE, $2::INTEGER) 
        `,
          [date, amount]
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