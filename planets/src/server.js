const express = require("express");
const morgan = require("morgan");
const { ValidationError } = require("express-validation");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets", require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      error: true,
      message: err.details.body[0].message
    });
  }

  if (err.response) {
    return res.status(err.response.status).json(err.response.data);
  }

  return res.status(err.statusCode || 500).json({
    error: true,
    message: err.message
  });
});

module.exports = server;
