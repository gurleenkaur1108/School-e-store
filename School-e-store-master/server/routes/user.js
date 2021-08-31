const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const config = require("./config");
const router = express.Router();

router.use(cookieParser());

//db
const db = mongoose.createConnection(config.dbURI);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});
const userModel = db.model("user", userSchema);

//middleware
async function refreshAuth(req, res, next) {
  const refreshToken = req.cookies?.refreshToken;
  if (refreshToken) {
    const { id } = await jwt.verify(refreshToken, config.refreshTokenSecret);
    if (id) {
      const existingUser = await userModel.findOne({ _id: id });
      if (existingUser) {
        req.user = existingUser;
        next();
      } else {
        res.send({
          msg: "User not authenticated, please sign in again",
          success: false
        });
      };
    } else {
      res.send({
        msg: "User not authenticated, please sign in again",
        success: false
      });
    };
  } else {
    res.send({
      msg: "User not authenticated, please sign in again",
      success: false
    });
  };
};

async function auth(req, res, next) {
  const authToken = req.header("Authorization");
  const accessToken = authToken.split(" ")[1];
  if (accessToken) {
    const { id } = jwt.verify(accessToken, config.accessTokenSecret);
    if (id) {
      const existingUser = await userModel.findOne({ _id: id });
      if (existingUser) {
        req.user = existingUser;
        next();
      } else {
        res.send({
          msg: "User not authenticated, please sign in again",
          user: null
        });
      };
    } else {
      res.send({
        msg: "User not authenticated, please sign in again",
        user: null
      });
    };
  } else {
    res.send({
      msg: "Unauthenticated user, please sign in again",
      user: null
    });
  }
};

//routes
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await userModel.findOne({ email, password });
  if (existingUser) {
    const id = existingUser._id;
    const accessToken = jwt.sign({ id }, config.accessTokenSecret, {
      expiresIn: 1000 * 60 * 60
    });
    const refreshTokenExpireTime = 1000 * 60 * 60 * 24 * 7;
    const refreshToken = jwt.sign({ id }, config.refreshTokenSecret, {
      expiresIn: refreshTokenExpireTime
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenExpireTime
    }).send({
      accessToken,
      msg: "User signed in"
    });
  } else {
    res.send({
      msg: "User does not exist, please sign up"
    });
  };
});

router.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) res.send({
    msg: "User already exists, please sign in"
  });
  else {
    await userModel.create({
      email,
      password,
      firstName,
      lastName
    });
    res.send({
      msg: "User created, please sign in"
    });
  };
});

router.post("/refreshTokens", refreshAuth, (req, res) => {
  const existingUser = req.user;
  const accessToken = jwt.sign({ id: existingUser._id }, config.accessTokenSecret, {
    expiresIn: 1000 * 60 * 60
  });
  res.send({
    accessToken,
    msg: "Access token refresh",
    success: true
  });
});

router.post("/getDetails", auth, (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;