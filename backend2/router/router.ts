import express from "express";
import { signUp, signIn } from "../service/userService";
import { products } from "../service/productService";

const router = express.Router();

router.route("/users").post(signUp);
router.route("/users/login").post(signIn);

router.route("/products").get(products)

export default router;
