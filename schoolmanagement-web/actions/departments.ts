 "use server";

import { BriefDepartment, ClassCreateProps, classType, Department, DepartmentCreateProps, Stream, StreamCreateProps } from "@/types/types";
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

export async function createDepartment(data: DepartmentCreateProps) {
  try {
    const response = await api.post("/departments", data);
    revalidatePath("/dashboard/academic/departments");
    return response.data;
  } catch (error) {
    console.error("Class creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create depaertment";
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

export async function getAllDepartments(){
  try {
     const response = await api.get("/departments");
     const departments = response.data;
    return departments as Department[];
  } catch (error) {
    console.log(error)
  }
}

export async function getBriefDepartments(){
  try {
     const response = await api.get("/departments/brief");
     const departments = response.data;
    return departments as BriefDepartment[];
  } catch (error) {
    console.log(error)
  }
}



