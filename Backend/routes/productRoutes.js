// const express = require("express");
// const router = express.Router();
// const Product = require("../models/productModel");

// // GET all products
// router.get("/", async (req, res) => {
//   try {
//     const productList = await Product.find();
//     res.json(productList);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // POST a new product
// router.post("/", async (req, res) => {
//   try {
//     const { name, image, countInStock } = req.body;
//     const product = new Product({ name, image, countInStock });
//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.createProduct);

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
