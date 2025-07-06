"use server";

import { ParentProps } from "@/components/dashboard/forms/users/parent-form";

import { Contact, Parent } from "@/types/types";

import axios from "axios";

// Correctly access public env variable
const BASE_API_URL = process.env.API_URL || "";

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function createParent(data: ParentProps) {
  try {
    const response = await api.post("/parents", data);
    return response.data;
  } catch (error) {
    console.error("Contact creation failed:", error);
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

export async function deleteParent(id:string) {
  console.log("deleted",id)
  return{
    ok:true
  }
  
}

export async function getAllParents(){
  try {
     const response = await api.get("/parents");
     const parents = response.data;
    return parents as Parent[];
  } catch (error) {
    console.log(error)
  }
}
