// import all packages
const express = require('express');
const app =express()
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3000

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

//Respond with Hello World! on the homepage:
//app.get('/',(req,res) => res.send("hello World"));
//listen to the port
app.listen(port,() => console.log (`example app is listeninng on port ${port}!`));
 
module.exports = app;