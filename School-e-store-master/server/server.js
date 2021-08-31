const express = require("express");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const config = require("./config");
const app = express();
const port = 4000;
const userRouter = require("./routes/user");

async function main() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cookieParser());
  app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));
  app.use("/user", userRouter);

  const server = app.listen(port, () => {
    console.log(`App is running on the port: ${port}`);
  });

  //db
  const db = mongoose.createConnection(config.dbURI);

};
main();
