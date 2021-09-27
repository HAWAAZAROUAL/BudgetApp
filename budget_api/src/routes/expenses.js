const router = require("express").Router();

module.exports = (db) => {

  router.get("/expenses", (request, response) => {
  
    db.query(`SELECT * FROM expenses`).then(({ rows: expenses}) => {
      
      response.json(expenses);
    });
  });
  return router
  };