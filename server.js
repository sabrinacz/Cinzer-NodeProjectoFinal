import express, { response } from 'express';
import connectToMongoDB from './database.config.js';
import product_router from './routes/product.route.js';
import dotenv from 'dotenv';


// Creamos la aplicación de Express
const app = express();

// Habilitamos el uso de JSON
app.use(express.json());

// Conexión con MongoDB
connectToMongoDB();

dotenv.config();


app.use('/api/products', product_router);

// Dedicamos un puerto para la aplicación
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});