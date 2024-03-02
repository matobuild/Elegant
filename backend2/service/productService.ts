import { Request, Response, NextFunction } from 'express';
import { mapError } from '../utils/errors';
import prisma from '../configs/database';

interface KeyValue {
    [key: string]: string | number
  }

const getQueryObject = (query: { [key: string]: string }) => {
    const result:KeyValue= {};
    for (let key in query) {
        switch (key) {
            case "category_id":
                result[key] = Number(query[key]);
                break;
            default:
        }
    }
    return result;
}

const products = async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const queryObject = getQueryObject(query as { [key: string]: string });
console.log("queryObject", queryObject);

    try {
        if (query) {const queryProducts = await prisma.products.findMany({
                where: queryObject
            });
            console.log(queryProducts);
            return res.status(200).json({ status: "success", data: queryProducts });    
        } else {
            const allProducts = await prisma.products.findMany();
            return res.status(200).json({ status: "success", data: allProducts });
        }
            
    } catch (error) {
        console.log(error);
        mapError(500, "Internal Server Error", next);
    }
}

export {products}