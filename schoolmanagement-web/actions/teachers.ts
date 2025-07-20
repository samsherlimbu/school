 "use server";

import { BriefClass, ClassCreateProps, classType, Stream, StreamCreateProps, Teacher, TeacherCreateProps } from "@/types/types";
import axios from "axios";

// Correctly access public env variable
const BASE_API_URL = process.env.API_URL || "";

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function createTeacher(data: TeacherCreateProps) {
  try {
    const response = await api.post("/teachers", data);
    return response.data;
  } catch (error) {
    console.error("Teacher creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create Teacher";
      throw new Error(message);
    }
    throw error;
  }
}



export async function getAllTeachers(){
  try {
     const response = await api.get("/teachers");
     const teachers = response.data;
    return teachers as Teacher[];
  } catch (error) {
    console.log(error)
  }
}




