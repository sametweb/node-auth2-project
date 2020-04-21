const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("./data/users/users-router.js");
const authRouter = require("./data/auth/auth-router");
const middlewares = require("./data/middlewares");

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use("/api/users", middlewares.authenticator, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => res.send("<h1>Using JSON Web Tokens (JWT)</h1>"));

module.exports = server;
