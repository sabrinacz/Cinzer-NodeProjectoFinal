import mongoose from "mongoose";

// Schema nos permite definir la estructura de los documentos en una colección de MongoDB

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;