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

  router.put("/expenses/:userid", (request, response) => {
     
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { amount,category_id ,available,date} = request.body.expense;
     
      
        db.query(
          ` UPDATE categories SET 
            amount = $1::integer
            where id=$2::integer`,
    
          [Number(available),category_id]
        )
        .then(() => {

              db.query(
                  `
                  INSERT INTO expenses ( category_id, amount,user_id,date) VALUES ($1::INTEGER, $2::INTEGER,$3::INTEGER,$4::DATE) returning date;
                   `,
                    [Number(category_id), Number(amount),Number(request.params.userid),date]
                 )
          })
          .then(() => {
                     setTimeout(() => {
                     response.status(204).json({});
            
                  }, 1000);
          })
          .catch(error => console.log(error))
     
});
            
               
              
          
       
        
    return router;
}