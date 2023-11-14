import {Router} from "express";
import {createUser, getUser} from "../controllers/user.controllers.js";

const router = Router();

router.post('/users/create', createUser)
router.get('/users/get', getUser)

export default router