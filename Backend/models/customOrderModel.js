const mongoose = require("mongoose");

const customOrderSchema = new mongoose.Schema({
  customOrderId: { type: String, unique: true },
  userId: String,
  designerId: String,
  description: String,
  deadline: Date,
  status: String,
});

const CustomOrder = mongoose.model("CustomOrder", customOrderSchema);

module.exports = CustomOrder;
