import { Request, Response, NextFunction } from 'express';
import {mapError} from "../utils/errors";
import {hashPassword, generateJWT,comparePassword} from "../utils/encrypt";

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const signUp = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const body = req.body;

    // Check if the username already exists
    const existingUser = await prisma.users.findUnique({
      where: { username: body.username },
    });
    if (existingUser) {
            return res.status(400).json({ status: "Fail", data: "User is duplicate" });
    }

    // Hash the password
    let pwd = await hashPassword(body.password, next)

    // Create the new user
    const newUser = await prisma.users.create({
      data: {
        name: body.name,
        email: body.email,
        username: body.username,
        user_password: pwd,
        roles: body.role,
      },
    })

    if (newUser) {
      // Generate JWT
      const token = await generateJWT({
        username: body.username,
        role: body.role,
        userId: newUser.user_id,
      })
      console.log("Token is:---->", token)
      return res
        .status(200)
        .json({ status: "Success", token: token, data: "SignUp success" })
    } else {
      return res.status(400).json({ status: "Fail", data: "SignUp fail" })
    }
  } catch (error) {
    console.log("THE ERROR message is -->", error)
    mapError(500, "Internal Server Error", next)
  }
}

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;

    // Find the user with the provided username
    const user = await prisma.users.findUnique({
      where: { username: body.username },
    });

    if (user) {
      // Compare the provided password with the stored password
      const isPwdValid = await comparePassword(
        body.password, user.user_password ?? ''
      )
      if (isPwdValid) {
        // Generate JWT
        const token = await generateJWT(
          { username: body.username, role: user.roles ?? '', userId: user.user_id })
        
        return res
          .status(200)
          .cookie("jwt", token, {
            expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
            httpOnly: true,
            secure: true,
          })
          .json({
            status: "success",
            token: token,
            data: "Login success",
          })
      } else {
        return res
          .status(401)
          .json({ status: "Fail", data: "Password invalid" });
      }
    } else {
      return res.status(400).json({ status: "Fail", data: "User not found" });
    }
  } catch (error) {
    console.log(error)
    mapError(500, "Internal Server Error", next)
  }
}

export {signUp, signIn}