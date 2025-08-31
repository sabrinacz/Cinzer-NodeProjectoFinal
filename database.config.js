import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI 

async function connectToMongoDB() {
    if (!MONGO_URI) {
        console.log('Falta MONGO_URI en variables de entorno');
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}

export default connectToMongoDB;

 