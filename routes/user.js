const express = require("express");
const user = express.Router();
const User = require("../models/User");
user.post("/login", async (req, res) => {
  //TODO handle login
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user);
  } catch (error) {
    res.status(400).send();
  }
});

user.post("/register", (req, res) => {
  //TODO handle register
  try {
  } catch (error) {}
});

module.exports = user;
