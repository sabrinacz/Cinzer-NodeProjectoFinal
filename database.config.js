// Conexión con MongoDB

import mongoose from "mongoose";

const MOGO_URI = "mongodb+srv://sabrinacinzer_db_user:l7s11YB26FQBgGOa@cluster0.v6otnn9.mongodb.net/UTN_PROYECTO_FINAL"

async function connectToMongoDB() {
    try {
        await mongoose.connect(MOGO_URI);
        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}

export default connectToMongoDB;

