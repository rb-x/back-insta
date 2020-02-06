const express = require("express");
const route_post = express.Router();

route_post.get("/all", (req, res) => {
  //TODO Fetch all posts
  return res.send("ok");
});

route_post.post("/add", (req, res) => {
  //TODO send json and create a post
  return res.send("ok");
});

route_post.post("/addlike", (req, res) => {
  //TODO send like to the post
  return;
});

route_post.post("/addcomment", (req, res) => {
  //TODO add comment to the post
  return;
});

module.exports = route_post;
