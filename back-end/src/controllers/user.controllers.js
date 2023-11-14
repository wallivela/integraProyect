import Users from "../models/Users.js";

export async function createUser(req, res) {
    let createUser = new Users(req.body);

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
