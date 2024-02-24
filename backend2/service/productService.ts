import { Request, Response, NextFunction } from 'express';
import { mapError } from '../utils/errors';
import prisma from '../configs/database';

const products = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const allProducts = await prisma.products.findMany()
    console.log(allProducts)
    return res.status(200).json({ status: "success", data: allProducts })
    }
     catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
}

export {products}