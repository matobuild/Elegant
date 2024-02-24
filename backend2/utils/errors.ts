import { Request, Response, NextFunction } from 'express';

const ApiError = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || "global error"
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.status,
  })
  console.log("THE GLOBAL ERROR message is -->", err.status)
}

class CustomError extends Error {
  statusCode: number | undefined;
  status: string | undefined;
}

const mapError = (status: number, msg: string, next: NextFunction) => {
  let error = new CustomError();
  error.statusCode = status;
  error.status = msg;
  next(error);
}

export {ApiError, mapError}