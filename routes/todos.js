const express = require("express");
const router = express.Router();
let todos = require("../todosdata");

// app.get('/todos', (req, res) => {
//     res.status(200).send({
//       success: 'true',
//       message: 'todos retrieved successfully',
//       todos: db
//     })
//   });

  router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: todos
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
  
module.exports = router;

//listen to the port
