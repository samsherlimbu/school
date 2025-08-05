import { db } from "@/db/db";
import {  TypedRequestBody, UserCreateProps, UserLoginProps } from "@/types/type";
import { generateAccessToken, generateRefreshToken, TokenPayload } from "@/utils/token";
import bcrypt from "bcrypt"
import { Request, Response } from "express";

export async function createUsers(req:TypedRequestBody<UserCreateProps>, res: Response) {

  
  const data= req.body;
  const {email,password,role,name,phone,schoolId,schoolName} = data;
  try {
    // Check if the email already exists\
    const existingEmail = await db.user.findUnique({
      where: {
       email,
      },
    });
  
   if (existingEmail) {
  return res.status(409).json({
    data: null,
    message: "Email already exists",
  });
}

const hashedPassword = await bcrypt.hash(password,10)
data.password =hashedPassword

    const newUser = await db.user.create({
      data
    });
    console.log(
      ` register successfully: ${newUser.email} (${newUser.id})`
    );
    return res.status(201).json({
      data: newUser,
      error: null,
    });
  } catch (error: any) {
  console.error("❌ Prisma error:", error);
  console.error(error.stack);
  return res.status(500).json({
    data: null,
    message: error.message || "Something went wrong",
  });
}
}
export async function loginUser(req:TypedRequestBody<UserLoginProps>, res: Response) {

  
  const data= req.body;
  const {email,password} = data;
  try {
    // Check if the email already exists\
    const existingUser = await db.user.findUnique({
      where: {
       email,
      },
    });
  
   if (!existingUser) {
  return res.status(409).json({
    data: null,
    message: "Invalid Credentials",
  });
}

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid credentials",
        data: null,
      });
    }

        // Generate tokens
    const tokenPayload: TokenPayload = {
      userId: existingUser.id,
      email: existingUser.email,
      role: existingUser.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

     await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId: existingUser.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    });

       const { password: _, ...userWithoutPassword } = existingUser;
 
    return res.status(201).json({
      data: {
        user: userWithoutPassword,
        accessToken,
        refreshToken,
      },
      error: null,
    });

  } catch (error: any) {
  console.error( error);
  return res.status(500).json({
    data: null,
    message: error.message || "Something went wrong",
  });
}
}
export async function getContacts(req: Request, res: Response) {
  try {
    const contacts = await db.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select:{
        id:true,
        email:true,
        name:true,
        phone:true,
      }
     
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error:"failed to fetch users"})
  }
}
