const express = require("express");
const router = express.Router();
let games = require("../gamedata");

router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: games
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  //
//   GET a single-match name
// :id is  used to find a singlematch with the _id.
  router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let game = games.find(club => club._id === id);
      res.status(200).json({
        data: game
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
  module.exports = router;

  // var appRouter = function (app) {
  //   app.get("/", function(req, res) {
  //     res.status(200).send("Welcome to our restful API");
  //   });
  // }
  //module.exports =  router;
 // module.exports = appRouter;
  