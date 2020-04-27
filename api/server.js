const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const usersRouter = require("../users/user-router");
const authRouter=require("../Auth/auth-router")

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });
  
module.exports = server;