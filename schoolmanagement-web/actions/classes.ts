 "use server";

import { BriefClass, ClassCreateProps, classType, Stream, StreamCreateProps } from "@/types/types";
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

export async function createClass(data: ClassCreateProps) {
  try {
    const response = await api.post("/classes", data);
    return response.data;
  } catch (error) {
    console.error("Class creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create class";
      throw new Error(message);
    }
    throw error;
  }
}

export async function createStream(data: StreamCreateProps) {
  try {
    const response = await api.post("/sections", data);
    return response.data;
  } catch (error) {
    console.error("Section creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create section";
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

export async function getAllClasses(){
  try {
     const response = await api.get("/classes");
     const classes = response.data;
    return classes as classType[];
  } catch (error) {
    console.log(error)
  }
}

export async function getAllBriefClasses(){
  try {
     const response = await api.get("/classes/brief");
     const classes = response.data;
    return classes as BriefClass[];
  } catch (error) {
    console.log(error)
  }
}

export async function getAllSreams(){
  try {
     const response = await api.get("/sections");
     const sections = response.data;
    return sections as Stream[];
  } catch (error) {
    console.log(error)
  }
}


