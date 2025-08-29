import Product from '../models/ProductModel.js';

class ProductRepository {
    // Aquí van los métodos para interactuar con la base de datos

    async getProducts () {
        const products = await Product.find();
        console.log(products);
        return products
    }

    async getProductById (id) {
        const product_found = await Product.findById(id);
        if (!product_found) {
            console.log(`No se encontró el producto con id ${id}`);
            return null;
        }
        console.log(product);
        return product_found;
    }   

    async updateProductById (product_id, new_product_data) {
        const updated_product = await Product.findByIdAndUpdate(
        product_id,
        new_product_data, 
        { new: true });
        return updated_product
    }

    async postProduct (title, price, description) {
        const new_product = new Product({ 
            title: title,
            price: price,
            description: description,
        });
        await new_product.save()
    }

    async deleteProductById (id) {
    const deleted_product = await Product.findByIdAndDelete(id);
    if (!deleted_product) {
        console.log(`No se pudo elimiar el producto con id ${id} porque no fue encontrado`);
        return null;
    }
    console.log('Eliminado:', deleted_product);
    return deleted_product;
    }

}

const product_repository = new ProductRepository();

export default product_repository;