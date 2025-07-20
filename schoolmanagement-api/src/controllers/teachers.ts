import { db } from "@/db/db";
import { ParentProps, TeacherProps, TypedRequestBody } from "@/types/type";
import { convertDateToIso } from "@/utils/convertDateToIso";
import { Request, Response } from "express";

export async function createTeacher(req:TypedRequestBody<TeacherProps>, res: Response) {
  const data = req.body;
  const {NIN,phone,email,dateOfBirth,dateOfJoining}=data
  data.dateOfBirth = convertDateToIso(dateOfBirth);
  data.dateOfJoining=convertDateToIso(dateOfJoining);

  try {
    // Check if the school already exists\
    const existingEmail = await db.teacher.findUnique({
      where: {
        email,
      },
    });
     const existingNIN = await db.teacher.findUnique({
      where: {
        NIN,
      },
    });
     const existingPhone = await db.teacher.findUnique({
      where: {
        phone,
      },
    });
    if (existingEmail || existingNIN || existingPhone) {
      return res.status(409).json({
        data: null,
        error: "Teacher with this email, NIN or phone already exists",
      });
    }
    const newTeacher = await db.teacher.create({
      data
    })
    console.log(
      `Teacher created successfully: ${newTeacher.firstName} (${newTeacher.id})`
    );
    return res.status(201).json({
      data: newTeacher,
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
export async function getTeacher(req: Request, res: Response) {
  try {
    const teachers = await db.teacher.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(teachers);
  } catch (error) {
    console.log(error);
  }
}

