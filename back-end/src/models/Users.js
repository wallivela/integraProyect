import mongoose from "mongoose";

const user = new mongoose.Schema({

    nombre:{
        require: true,
        type: String
    },
    apellido:{
        require: true,
        type: String
    },
    correo:{
        require: true,
        type: String
    },
    pasword:{
        require: true,
        type: String
    }
    
    
});

export default mongoose.model('User', user)