import { Request, Response, NextFunction } from 'express';
import { mapError } from '../utils/errors';
import prisma from '../configs/database';

const categories = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const allCategories = await prisma.categories.findMany()
    console.log(allCategories)
    return res.status(200).json({ status: "success", data: allCategories })
    }
     catch (error) {
        console.log(error)
        mapError(500, "Internal Server Error", next)
    }
}

export {categories}