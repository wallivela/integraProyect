import Users from "../models/Users.js";

export async function createUser(req, res) {
    let createUser = new Users(req.body);
//--------------------------------------------------
    try {
        await createUser.save();
        res.status(200).json(createUser);
    } catch (error) {
        res.status(500).json("error");
    }
}

export async function getUser(req, res) {
    try {
        let usuarios = await Users.find(); // Espera a que la promesa se resuelva
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json("error");
    }
}
//----------------------------------------------
export async function login(req, res) {
    try {
        let correo = req.body.correo;
        let pasword = req.body.pasword;
        let usuario = await Users.findOne({ correo: correo }); // Cambié "usuarios" a "usuario"
        if (pasword === usuario.pasword) {
            res.status(200).json({ status: "estás logueado" });
            return;
        }
        res.status(500).json({ status: "upss parece no estar logueado" });
    } catch (error) {
        res.status(500).json("error");
    }
}
