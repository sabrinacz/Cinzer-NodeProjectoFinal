// Conexión con MongoDB

import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI 

async function connectToMongoDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}

export default connectToMongoDB;

 