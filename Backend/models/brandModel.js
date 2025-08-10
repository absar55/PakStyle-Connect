const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandId: { type: String, unique: true },
  name: String,
  description: String,
  logo: String,
  coverImage: String,
  socialMedia: {
    instagram: String,
    facebook: String,
    twitter: String,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
