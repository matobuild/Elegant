import { Request, Response, NextFunction } from 'express';
import { mapError } from '../utils/errors';
import prisma from '../configs/database';

interface KeyValue {
    [key: string]: string | number | { gte: number, lte: number };
  }

const getQueryObject = (query: { [key: string]: string }) => {
    const result:KeyValue= {};
    let min= NaN
    let max = NaN

    for (let key in query) {
        switch (key) {
            case "category_id":
                result[key] = Number(query[key]);
                break;
            case "minPrice":                
              min = Number(query[key]);
              continue
             case "maxPrice":
              max = Number(query[key]);
                result["final_price"] = {gte: min, lte: max};
                break;
            default:
        }
    }
    return result;
}

const products = async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    // console.log("query", query);
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 12;

    const skip = 0
    const take = pageSize*page;

    const queryObject = getQueryObject(query as { [key: string]: string });
console.log("queryObject", queryObject);

    try {
        if (query) {const queryProducts = await prisma.products.findMany({
                where: queryObject,
                skip: skip,
                take: take
            });
            console.log(queryProducts);
            return res.status(200).json({ status: "success", data: queryProducts });    
        } else {
            const allProducts = await prisma.products.findMany({
                skip: skip,
                take: take
            });
            return res.status(200).json({ status: "success", data: allProducts });
        }
            
    } catch (error) {
        console.log(error);
        mapError(500, "Internal Server Error", next);
    }
}

const productById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const product = await prisma.products.findUnique({
            where: { product_id: Number(id) },  
            include: { categories: true }, 
        });

        if (product) {
            return res.status(200).json({ status: "success", data: product });
        } else {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }
    } catch (error) {
        console.log(error);
        mapError(500, "Internal Server Error", next);
    }
}

export { products, productById }