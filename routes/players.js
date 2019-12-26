const express = require("express");
const router = express.Router();
// import dummy database
let players = require("../dummydata");

router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: players
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  //
//   GET a single-player details
// We got the full player list. Now we need each player details. This can be done by passing the id of each player as the API parameter from the frontend.

// :id is the player_id passed as the URL parameter. It is used to find a single-player with the _id.
  router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let player = players.find(player => player._id === id);
      res.status(200).json({
        data: player
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
  }
  
  module.exports = appRouter;
  module.exports = router;