const express = require("express");
const router = express.Router();
let games = require("../gamedata");

// router.get("/games/list", (req, res) => {
//     res.status(200).send({
//       success: 'true',
//       message: 'list retrieved successfully',
//       data: games,
//     });
//   });

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
      let game = games.find(game => game._id === id);
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

//   // add a game
// router.post("/games", (req, res) => {
//     const game = {
//         id: games.length + 1,
//         title: req.body.title
//     }
//     games.push(game);
//     res.send(game);
// });
 
  module.exports = router;

  
