import { Response, NextFunction } from "express";
import { mapError } from "../utils/errors";
import prisma from "../configs/database";
import { IGetUserAuthInfoRequest } from "../configs/definitionFile";

const addToCheckoutCart = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {

    try {
        // query cart
        let cart = await prisma.carts.findFirst({ where: { user_id: req.user?.userId, type: "checkoutCart" } })
        
        if (!cart) {
            // create a new cart
            cart = await prisma.carts.create({ data: { type: "checkoutCart", user_id: req.user?.userId } })
        }

        // if card_id exist, need to update the quantity for that product_id, if not create data 
        let cartId= await prisma.cartitems.findMany({ where: { cart_id: cart.cart_id, product_id: req.body.product_id } })
        console.log(cartId);
        
        if (cartId.length > 0) {
            try {
                await prisma.cartitems.update({
                    where: { cartitem_id: cartId[0].cartitem_id },
                    data: { quantity: cartId[0].quantity + req.body.quantity }
                })
                return res.status(200).json({ status: "Success", data: "update quantity for checkoutCart success" });       
            } catch (error) {
                return res.status(400).json({ status: "Fail", data: "update quantity for checkoutCart fail" });   
            }
        }else{
            try {
                const body = req.body;
            await prisma.cartitems.create({
                data: {
                    quantity: body.quantity,
                    product_id: body.product_id,
                    cart_id: cart.cart_id,
                }
            });
            return res.status(200).json({ status: "Success", data: "Add to checkoutCart success" });
            } catch (error) {
            return res.status(400).json({ status: "Fail", data: "Add to checkoutCart fail" });
            }
        }
    } catch (error) {
        console.log("THE ERROR message is -->", error);
        mapError(500, "Internal Server Error", next);
    }
}

const getCheckoutCart = async (req: IGetUserAuthInfoRequest, res: Response, next:NextFunction) => {

    try {
        const allCheckoutCart = await prisma.cartitems.findMany({
            where: { carts: { user_id: req.user?.userId, type: "checkoutCart" } },
        });
        console.log(allCheckoutCart);
        return res.status(200).json({ status: "success", data: allCheckoutCart });
    }
     catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
}

const deleteCheckoutCart = async (req: IGetUserAuthInfoRequest, res: Response, next:NextFunction) => {
// need to check if it is the user's cart
    
const cart = await prisma.carts.findFirst({ where: { user_id: req.user?.userId, type: "checkoutCart" } })
    if (!cart) {
        return res.status(400).json({ status: "Fail", data: "No checkoutCart for this user" });
    }
    try {
        
        await prisma.cartitems.delete({
            where: { cartitem_id: req.body.cartitem_id,
                    cart_id: cart.cart_id},
        });
        return res.status(200).json({
            status: "success",
            data: "Delete success",
          })
    } catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
    
}

export { addToCheckoutCart, getCheckoutCart, deleteCheckoutCart  };


