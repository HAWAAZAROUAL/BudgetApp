const router = require("express").Router();

module.exports = (db) => {

    router.get("/budgets", (request, response) => {
         





      });

    router.put("/budgets/:userid", (request, response) => {
        console.log("hahhahha",request.body.budget);
        if (process.env.TEST_ERROR) {
          setTimeout(() => response.status(500).json({}), 1000);
          return;
        }
    
        const {budgetName,budgetLimit,startDate,endDate } = request.body.budget;
        
        db.query(
          `
          INSERT INTO budgets (name,budget_limit, start_date,end_date,user_id ) VALUES ($1::text, $2::INTEGER, $3::DATE,$4::DATE,$5::INTEGER)
        `,
          [budgetName, budgetLimit, startDate,endDate,Number(request.params.userid)]
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