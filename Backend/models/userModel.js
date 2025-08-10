const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  username: String,
  email: String,
  password: String,
  userType: String,
  profilePicture: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
  },
  contact: {
    phone: String,
    website: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
