import express from 'express';
import dotenv from 'dotenv'; // Corrección en la importación de dotenv
import mongoose from 'mongoose'; // Corrección en la importación de mongoose
import cors from 'cors'; // Corrección en la importación de cors
import router from './routes/user.routes.js';
dotenv.config();

function inicioServidor() {
    const url = process.env.URL;
    mongoose.connect(url);

    const datosBase = mongoose.connection;

    datosBase.on('error', (error) => {
        console.log("no se pudo conectar a la base");
    });

    datosBase.once('connected', () => {
        console.log("conectados amigo");
    });

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(router)
    app.listen(process.env.PORT)
    console.log("Se inicia servicio localhost:3000/")
    
}

inicioServidor();
