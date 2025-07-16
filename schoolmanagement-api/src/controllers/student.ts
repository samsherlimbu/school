import { db } from "@/db/db";
import { StudentCreateProps,TypedRequestBody } from "@/types/type";
import { convertDateToIso } from "@/utils/convertDateToIso";
import { Request, Response } from "express";

export async function createStudent(req:TypedRequestBody<StudentCreateProps>, res: Response) {
  const data = req.body;
  const {email,dob,regNo,admissionDate}=data
  data.dob = convertDateToIso(dob);
  data.admissionDate = convertDateToIso(admissionDate);
  try {
    // Check if the school already exists\
    const existingEmail = await db.student.findUnique({
      where: {
        email,
      },
    });
    const existingRegNo = await db.student.findUnique({
      where: {
        regNo,
      },
  });
   
    if (existingEmail   || existingRegNo) {
      return res.status(409).json({
        data: null,
        error: "Student with this email or registration number already exists",
      });
    }
    const newStudent = await db.student.create({
      data,
    });
    console.log(
      `Student created successfully: ${newStudent.name} (${newStudent.id})`
    );
    return res.status(201).json({
      data: newStudent,
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
export async function getStudent(req: Request, res: Response) {
  try {
    const students = await db.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
  }
}

export async function getNextStudentSequence(req: Request, res: Response) {
  try {
    const lastStudent = await db.student.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    const stringSeq= lastStudent?.regNo.split("/")[3]
    const lastSeq = stringSeq ? parseInt(stringSeq) : 0;
    const nextSq = lastSeq +1;
    return res.status(200).json(nextSq);
  } catch (error) {
    console.log(error);
  }
}
