import { db } from "@/db/db";
import { ParentProps, TypedRequestBody } from "@/types/type";
import { convertDateToIso } from "@/utils/convertDateToIso";
import { Request, Response } from "express";

export async function createParent(req:TypedRequestBody<ParentProps>, res: Response) {
  const data = req.body;
  const {NIN,phone,email,dob}=data
  data.dob = convertDateToIso(dob);
  try {
    // Check if the school already exists\
    const existingEmail = await db.parent.findUnique({
      where: {
        email,
      },
    });
     const existingNIN = await db.parent.findUnique({
      where: {
        NIN,
      },
    });
     const existingPhone = await db.parent.findUnique({
      where: {
        phone,
      },
    });
    if (existingEmail || existingNIN || existingPhone) {
      return res.status(409).json({
        data: null,
        error: "Parent with this email, NIN or phone already exists",
      });
    }
    const newParent = await db.parent.create({
      data
    });
    console.log(
      `Parent created successfully: ${newParent.ParentName} (${newParent.id})`
    );
    return res.status(201).json({
      data: newParent,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Something went wrong",
    });
  }
}
export async function getParent(req: Request, res: Response) {
  try {
    const parents = await db.parent.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(parents);
  } catch (error) {
    console.log(error);
  }
}

