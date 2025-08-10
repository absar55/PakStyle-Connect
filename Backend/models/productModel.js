// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   countInStock: Number,
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: String,
  brandId: String,
  designerId: String,
  category: String,
  price: Number,
  description: String,
  images: [String],
  sizes: [String],
  colors: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
