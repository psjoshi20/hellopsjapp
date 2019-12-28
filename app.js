// import all packages
const express = require('express');
const app =express()
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3000
const db= require("./db.js");
//const port =3000
app.use(logger('dev'));//  get log details of application 
app.use(cors());// enable cross origin resources
app.use(bodyParser.urlencoded({ extended: true }));// handle http req
app.use(bodyParser.json());

//import routes
const playersRouter = require("./routes/players");
app.use('/players', playersRouter);
const clubsRouter = require("./routes/clubs");
app.use('/clubs', clubsRouter);
const gamesRouter = require("./routes/games");
app.use('/games', gamesRouter);
//import db from './db/db';
// const gamesRouter = require("./routes/games");
// app.use('/games', gamesRouter);
 app.get('/todos',(req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
  });

//Respond with Hello World! on the homepage:
app.get('/',(req,res) => res.send("hello to Cricketfan clubs"));
//listen to the port

app.get('/games', (req, res) => {
    res.send(['IPL', 'Oneday match', 'Ranaji cup','Jr IPL']);
});
// single parameter
app.get('/games/:id', (req, res) => {
    res.send(req.params.id);
});

//Multiple Params You can have more than one route parameter in the url. Consider this code.
app.get('/games/:title/:publisher', (req, res) => {
    res.send(req.params);
});

//Query Parameters
//We can also access query parameters in the url. Here we update the code to allow for both route parameters and query parameters.

app.get('/games/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});
app.listen(port,() => console.log (`example app is listeninng on port ${port}!`));
 
module.exports = app;