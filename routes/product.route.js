import express from "express";
import product_controller from "../controllers/product.controller.js";

// Creamos un enrutador
const product_router = express.Router();

product_router.get(
  '/', 
  product_controller.getProducts
);

product_router.post(
  '/', 
  product_controller.postProduct
)

product_router.put(
  '/', 
  product_controller.putProduct
)

product_router.delete(
  '/', 
  product_controller.deleteProduct
)

product_router.get(
  '/:product_id', 
  product_controller.getProductById
)

export default product_router;