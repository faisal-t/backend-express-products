import express from "express";
import {
  getAllProducts,
  createProducts,
  getProductsById,
  updateProduct,
  DeleteProduct,
} from "../controller/product.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProducts);
router.get("/:id", getProductsById);
router.patch("/:id", updateProduct);
router.delete("/:id", DeleteProduct);

export default router;
