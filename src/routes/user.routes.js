import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";



const router = Router()
router.route("./api/v1/register").post(registerUser)




export default router