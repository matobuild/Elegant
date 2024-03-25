import { IGetUserAuthInfoRequest } from "../configs/definitionFile";
import { Response, NextFunction } from "express";
import { mapError } from "../utils/errors";
import prisma from "../configs/database";


const orders = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
        const allOrders = await prisma.orders.findMany({
            where: { user_id: req.user?.userId } ,
            orderBy:{created_at:"desc"},
            include:{order_items: true}
        });
        console.log(allOrders);
        return res.status(200).json({ status: "success", data: allOrders });
    }
     catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
}


export {orders}