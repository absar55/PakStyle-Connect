const express = require("express");
const router = express.Router();
const customOrderController = require("../controllers/customOrderController");

router.post("/", customOrderController.createCustomOrder);

router.get("/", customOrderController.getCustomOrders);

router.get("/:id", customOrderController.getCustomOrderById);

router.put("/:id", customOrderController.updateCustomOrder);

router.delete("/:id", customOrderController.deleteCustomOrder);

module.exports = router;
