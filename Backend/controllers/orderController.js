const Order = require("../models/orderModel");

async function createOrder(req, res) {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}

async function updateOrder(req, res) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}

async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
