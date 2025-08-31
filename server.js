import dotenv from 'dotenv';
import 'dotenv/config';

import express from 'express';
import connectToMongoDB from './database.config.js';
import product_router from './routes/product.route.js';

dotenv.config();

// Conexión con MongoDB
connectToMongoDB();

// Creamos la aplicación de Express
const app = express();
// Habilitamos el uso de JSON
app.use(express.json());


app.use('/api/products', product_router);

// Dedicamos un puerto para la aplicación
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

