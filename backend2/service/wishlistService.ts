import { Response, NextFunction } from "express";
import { mapError } from "../utils/errors";
import prisma from "../configs/database";
import { IGetUserAuthInfoRequest } from "../configs/definitionFile";

const addToWishlistCart = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {

    try {
        // query wishlist cart
        let cart = await prisma.carts.findFirst({ where: { user_id: req.user?.userId, type: "wishlist" } })
        
        if (!cart) {
            // create a new cart
            cart = await prisma.carts.create({ data: { type: "wishlist", user_id: req.user?.userId } })
        }

         // if card_id exist, do not add the same product, if not create data 
         let cartId= await prisma.cartitems.findMany({ where: { cart_id: cart.cart_id, product_id: req.body.product_id } })
         console.log(cartId);
         
         if (cartId.length > 0) {
            return res.status(400).json({ status: "Fail", data: "product already exist in WishlistCart" });   
         }
         else{
             try {
                     const body = req.body;
                 await prisma.cartitems.create({
                     data: {
                         quantity: body.quantity,
                         product_id: body.product_id,
                         cart_id: cart.cart_id,
                     }
                 });
                 return res.status(200).json({ status: "Success", data: "Add to WishlistCart success" });
                 } catch (error) {
                 return res.status(400).json({ status: "Fail", data: "Add to WishlistCart fail" });
                 }
         }
    } catch (error) {
        console.log("THE ERROR message is -->", error);
        mapError(500, "Internal Server Error", next);
    }
}

const getWishlistCart = async (req: IGetUserAuthInfoRequest, res: Response, next:NextFunction) => {

    try {
        const allWishlistCart = await prisma.cartitems.findMany({
            where: { carts: { user_id: req.user?.userId, type: "wishlist" } },
            orderBy:{cartitem_id:"asc"},
        });
        console.log(allWishlistCart);
        return res.status(200).json({ status: "success", data: allWishlistCart });
    }
     catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
}

const deleteWishlistCart = async (req: IGetUserAuthInfoRequest, res: Response, next:NextFunction) => {
    // need to check if it is the user's cart
        
    const cart = await prisma.carts.findFirst({ where: { user_id: req.user?.userId, type: "wishlist" } })
        if (!cart) {
            return res.status(400).json({ status: "Fail", data: "No WishlistCart for this user" });
        }
        const productId = req.params.product_id;
        
        const product = await prisma.cartitems.findFirst({ where: { cart_id: cart.cart_id, product_id: Number(productId)}})
        if (!product) {
            return res.status(400).json({ status: "Fail", data: "No product for this user" });
        }
        try {
            await prisma.cartitems.delete({
                where: {cartitem_id: product.cartitem_id}});
  
            return res.status(200).json({
                status: "success",
                data: "Delete success",
              })
        } catch (error) {
            console.log(error)
            mapError(500, "Internal Server Error", next)
        }
        
    }

    export {addToWishlistCart,getWishlistCart,deleteWishlistCart}
