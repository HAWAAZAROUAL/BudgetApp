const router = require("express").Router();

module.exports = db => {
  router.get("/Home", (request, response) => {
    db.query(
      `
      SELECT * FROM users;
    `
    ).then(({ column: first_name }) => {
      response.json(first_name);
    });
  });

  return router;
};