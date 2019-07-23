// bring in express
const express = require('express');

// create server
const server = express();

// bring in middleware tools
const helmet = require('helmet');
const cors = require('cors')
// const port = 3000;

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger)

// bring in route
const UserRoute = require('./routes/UsersRoute');
server.use('/', UserRoute);


server.get('/', (req, res) => {
  res.send("This is the taco page")
})


function logger(req, res, next){
  console.log(`${req.method} Request`)
  next();
}
module.exports = server;