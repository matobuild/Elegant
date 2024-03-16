import express from "express";
import { signUp, signIn, verifyToken } from "../service/userService";
import { productById, products } from "../service/productService";
import { categories } from "../service/categoriesService";
import { addToCheckoutCart, deleteCheckoutCart, editToCheckoutCart, getCheckoutCart } from "../service/cartService";

const router = express.Router();

router.route("/users").post(signUp);
router.route("/users/login").post(signIn);

router.route("/products").get(products)
router.route("/products/:id").get(productById)

router.route("/categories").get(categories)

router.route("/cart").post(verifyToken,addToCheckoutCart)
router.route("/cart").get(verifyToken,getCheckoutCart)
router.route("/cart/:cartitem_id").delete(verifyToken,deleteCheckoutCart)
router.route("/cart").patch(verifyToken,editToCheckoutCart)

export default router;
