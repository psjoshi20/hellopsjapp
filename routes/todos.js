const express = require("express");
const router = express.Router();
let todos = require("../db");


app.get('/todos', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
  });
  
module.exports = router;
