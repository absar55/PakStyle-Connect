const CustomOrder = require("../models/customOrderModel");

async function createCustomOrder(req, res) {
  try {
    const newCustomOrder = await CustomOrder.create(req.body);
    res.json(newCustomOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getCustomOrders(req, res) {
  try {
    const customOrders = await CustomOrder.find();
    res.json(customOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCustomOrderById(req, res) {
  try {
    const customOrder = await CustomOrder.findById(req.params.id);
    res.json(customOrder);
  } catch (error) {
    res.status(404).json({ error: "Custom order not found" });
  }
}

async function updateCustomOrder(req, res) {
  try {
    const updatedCustomOrder = await CustomOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCustomOrder);
  } catch (error) {
    res.status(404).json({ error: "Custom order not found" });
  }
}

async function deleteCustomOrder(req, res) {
  try {
    await CustomOrder.findByIdAndDelete(req.params.id);
    res.json({ message: "Custom order deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "Custom order not found" });
  }
}

module.exports = {
  createCustomOrder,
  getCustomOrders,
  getCustomOrderById,
  updateCustomOrder,
  deleteCustomOrder,
};
