const router = require("express").Router();

module.exports = (db) => {

  router.get("/quotes", (request, response) => {
  
    db.query(
      `
      SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1
      `
      ).then(({ rows: quotes}) => {
      
        response.json(
          quotes.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
    });
  });
    return router;
};