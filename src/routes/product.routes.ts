import express from "express";
import productController from "../controller/product.controller";

const router = express.Router();

router.post("/create",productController.createProduct)
router.post("/get-product",productController.getProduct)
router.post("/delete-product",productController.deleteProduct)

export default router