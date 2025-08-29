import Product from '../models/ProductModel.js';
import product_repository from '../repositories/product.repository.js';

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await product_repository.getProducts();
            return res.json({
                message: 'Lista de productos desde DB',
                data: products, 
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const { product_id } = req.params;
            const product = await product_repository.getProductById(product_id);
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.json({ data: product });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async putProduct(req, res) {
        try {
            const { product_id } = req.params;
            const updatedProduct = await product_repository.updateProductById(product_id, req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.json({ data: updatedProduct });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async postProduct(req, res) {
        try {
            const { title, price, description } = req.body;
            const newProduct = await product_repository.postProduct(title, price, description);
            return res.status(201).json({ data: newProduct });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { product_id } = req.params;
            const deletedProduct = await product_repository.deleteProductById(product_id);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.json({ data: deletedProduct });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

const product_controller = new ProductController();
export default product_controller;