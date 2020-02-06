const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  like: {
    type: Number,
    min: 0
  },
  comments: {
    type: [mongoose.Types.ObjectId]
  },
  photo: {
    type: Buffer,
    required: true
  }
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
