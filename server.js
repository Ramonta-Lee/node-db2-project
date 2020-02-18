const express = require("express");
const helmet = require("helmet");

const CarsRouter = require("./hubs/CarRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>DB Schema Design!!</h2>`);
});

module.exports = server;
