import { NextFunction } from 'express';
import bcrypt from "bcrypt"
import {mapError} from "./errors"
import jwt from "jsonwebtoken"

const hashPassword = async (plaintextPassword:string, next: NextFunction) => {
  if (plaintextPassword) {
    try {
      const hash = await bcrypt.hash(plaintextPassword, 10)
      return hash
    } catch (error) {
      console.log("hashPassword error -->", error)
      mapError(500, "Internal Server Error", next)
    }
  }
  return null
}

const comparePassword = async (plaintextPassword: string, hash: string) => {
  const result = await bcrypt.compare(plaintextPassword, hash)
  return result
}

const generateJWT = async (data:{username: string, role: string, userId: number}) => {
  if(!process.env.JWT_SECRET) throw new Error("JWT_SECRET not found")
  const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
  return token
}

const encryptVerifyToken = async (token:string) => {
  if(!process.env.JWT_SECRET) throw new Error("JWT_SECRET not found")
  const result = jwt.verify(token, process.env.JWT_SECRET)
  return result
}

export { hashPassword, comparePassword, generateJWT, encryptVerifyToken}
