import { Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../configs/definitionFile";
import { mapError } from "../utils/errors";
import prisma from "../configs/database";

const checkout= async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    
    const cart = await prisma.carts.findFirst({ where: { user_id: req.user?.userId, type: "checkoutCart" } })
    if (!cart) {
        return res.status(400).json({ status: "Fail", data: "No checkoutCart for this user" });
    }
        const cartitems= await prisma.cartitems.findMany({ where: { cart_id: cart.cart_id},include:{products: true} })

const total = cartitems.map((item)=>{
        const a = item?.quantity || NaN 
        const b = Number(item.products?.final_price)
        const c = a * b
        return c
}).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

try {
    const orders = await prisma.orders.create({data:{total_price: total, status: "paid",created_at: new Date(),user_id: req.user?.userId }})

        cartitems.forEach(async (item)=>{
        await prisma.order_items.create({data:{
            quantity: item?.quantity || NaN,
            name: item.products?.name || "",
            description: item.products?.description || "",
            price: Number(item.products?.price),
            image_url: item.products?.image_url || "",
            measurements: item.products?.measurements,
            details : item.products?.details,
            packaging: item.products?.packaging,
            discount : item.products?.discount,
            category_id: item.products?.category_id,
            order_id: orders.order_id,
            product_id: item.products?.product_id
        }})
    })
// need to add the form 
// delete the cart that was paid
} catch (error) {
    console.log("THE ERROR message is -->", error);
    mapError(500, "Internal Server Error", next);
}

}

export {checkout}