 "use server";

import { BriefDepartment,  BriefStudent,  Department,  Subject,  SubjectCreateProps } from "@/types/types";
import axios from "axios";
import { revalidatePath } from "next/cache";

// Correctly access public env variable
const BASE_API_URL = process.env.API_URL || "";

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function createSubject(data: SubjectCreateProps) {
  try {
    const response = await api.post("/subjects", data);
    revalidatePath("/dashboard/academic/subjects");
    return response.data;
  } catch (error) {
    console.error("Subject creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create Subject";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteContact(id:string) {
  console.log("deleted",id)
  return{
    ok:true
  }
  
}

export async function getAllSubjects(){
  try {
     const response = await api.get("/subjects");
     const subjects = response.data;
    return subjects as Subject[];
  } catch (error) {
    console.log(error)
  }
}

export async function getBriefDepartments(){
  try {
     const response = await api.get("/subjects/brief");
     const subjects = response.data;
    return subjects as BriefStudent[];
  } catch (error) {
    console.log(error)
  }
}



