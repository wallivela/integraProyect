import {Router} from "express";
import {createUser, getUser, login} from "../controllers/user.controllers.js";

const router = Router();

router.post('/users/create', createUser)
router.get('/users/get', getUser)
router.post('/users/login',login)
export default router