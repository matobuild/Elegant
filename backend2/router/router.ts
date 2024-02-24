import express from "express";
import {signUp, signIn} from "../service/userService";


const router = express.Router();

router.route("/users/").post(signUp);
router.route("/users/login").post(signIn);

export default router