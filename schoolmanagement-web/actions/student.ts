"use server";

import { StudentProps } from "@/components/dashboard/forms/students/singleStudent-form";


import { Contact, Parent, Student } from "@/types/types";

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

export async function createStudent(data: StudentProps) {
  try {
    const response = await api.post("/students", data);
    return response.data;
  } catch (error) {
    console.error("Student creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create parent";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteStudent(id:string) {
  console.log("deleted",id)
  return{
    ok:true
  }
  
}

export async function getAllStudents(){
  try {
     const response = await api.get("/students");
     const students = response.data;
    return students as Student[];
  } catch (error) {
    console.log(error)
  }
}

export async function getStudentNextSequence(){
  try {
     const response = await api.get("/students/seq");
     const nextSq = response.data;
    return nextSq as number;
  } catch (error) {
    console.log(error)
  }
}
