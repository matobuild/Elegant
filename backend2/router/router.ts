import express from "express";
import { signUp, signIn } from "../service/userService";
import { productById, products } from "../service/productService";
import { categories } from "../service/categoriesService";

const router = express.Router();

router.route("/users").post(signUp);
router.route("/users/login").post(signIn);

router.route("/products").get(products)
router.route("/products/:id").get(productById)

router.route("/categories").get(categories)

export default router;
