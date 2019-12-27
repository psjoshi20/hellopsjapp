const express = require("express");
const router = express.Router();
let clubs = require("../dummyuserdata");

router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: clubs
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  //
//   GET a single-club details
// We got the full club list. Now we need each player details. This can be done by passing the id of each player as the API parameter from the frontend.

// :id is the player_id passed as the URL parameter. It is used to find a single-player with the _id.
  router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let club = clubs.find(club => club._id === id);
      res.status(200).json({
        data: club
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
  