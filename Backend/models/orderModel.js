const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  userId: String,
  productId: String,
  quantity: Number,
  totalPrice: Number,
  orderDate: Date,
  status: String,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
