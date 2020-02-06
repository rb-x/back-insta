const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is Invalid");
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: new Date()
  }
});

// custom mongoose method to verify the user pass + email
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await user.findOne({ email });
  if (!email) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
};

// Hashing password before saving
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);
