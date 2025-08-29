// Se encarga de manejar la lógica de negocio

import product_repository from "../repositories/product.repository";


class ProductService {
   
    getProduct (){
        return product_repository.getProducts();
    }

    getProductById () {
        return product_repository.getProducts();
       
    }

    updateProductById () {
        
    }

    postProduct () {
    }

    deleteProductById () {
    }   
}