import express, { response } from 'express';
import connectToMongoDB from './database.config.js';
import Product from './models/ProductModel.js';
import mongoose from 'mongoose';

// Creamos la aplicación de Express
const app = express();

// Habilitamos el uso de JSON
app.use(express.json());

// Conexión con MongoDB
connectToMongoDB();

// Dedicamos un puerto para la aplicación
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

/* const products = [
  { id: 1, title: 'Lámpara de mesa minimalista', price: 45000, description: 'Lámpara con diseño escandinavo en madera y pantalla de lino.' },
  { id: 2, title: 'Sillón moderno de terciopelo', price: 249000, description: 'Sillón cómodo con patas de madera de roble y tapizado de terciopelo azul.' },
  { id: 3, title: 'Alfombra bohemia', price: 89000, description: 'Alfombra tejida a mano con patrones geométricos en tonos cálidos.' },
  { id: 4, title: 'Juego de vajilla de cerámica', price: 79000, description: 'Set de 12 piezas con acabado artesanal en tonos neutros.' },
  { id: 5, title: 'Mesa auxiliar redonda', price: 129000, description: 'Mesa pequeña con superficie de mármol blanco y estructura dorada.' },
  { id: 6, title: 'Espejo de pared con marco de madera', price: 99000, description: 'Espejo decorativo de estilo nórdico con marco en madera clara.' },
  { id: 7, title: 'Cojín decorativo bordado', price: 24900, description: 'Cojín con diseño bordado artesanal en tonos tierra.' },
  { id: 8, title: 'Jarrón de vidrio soplado', price: 39000, description: 'Jarrón transparente con forma orgánica, ideal para flores secas.' },
  { id: 9, title: 'Estantería flotante', price: 59000, description: 'Baldas de madera natural para almacenamiento y decoración.' },
  { id: 10, title: 'Reloj de pared minimalista', price: 49000, description: 'Reloj con diseño simple en blanco y agujas metálicas negras.' },
]; */

// Crear productos
async function createProduct (title, price, description) {
  const new_product = new Product({ 
    title: title,
    price: price,
    description: description,
  });
   await new_product.save()
};

/* createProduct('Cuadro decorativo', 20500, 'Cuadro moderno para sala de estar'); */

// Obtener productos
async function getProducts () {
  const products = await Product.find();
  console.log(products);
  return products
}
getProducts();

// Actualizar un producto por id
async function updateProductById (id, new_product_data) {
  const updated_product = await Product.findByIdAndUpdate(
    id, 
    new_product_data, 
    { new: true });
  console.log(updated_product);
  return updated_product
}

updateProductById('68b1e4c28116a8e61cffc1ef', {price: 4650000, description: 'Tv Samsung 55 pulgadas'});


// Eliminar un producto por id
async function deleteProductById (id) {
  const deleted_product = await Product.findByIdAndDelete(id);
  if (!deleted_product) {
    console.log(`No se pudo elimiar el producto con id ${id} porque no fue encontrado`);
    return null;
  }
  console.log('Eliminado:', deleted_product);
  return deleted_product;
}

// deleteProductById('68b1e6a7e7094f0d1e91ec3f');


// Endpoint para obtener todas los productos
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json({
    message: 'Lista de productos desde DB',
    data: products, 
  });
})

// Endpoint para crear un producto
app.post('/products', async  (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  await createProduct(title, price, description);
  const products = await getProducts();

  res.json({
    message: 'Producto creado',
    data: products, 
  });  
});
