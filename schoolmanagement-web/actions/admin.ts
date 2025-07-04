"use server";

import { ContactProps } from "@/components/frontend/contact-us";
import { Contact } from "@/types/types";
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

export async function createContact(data: ContactProps) {
  try {
    const response = await api.post("/contacts", data);
    return response.data;
  } catch (error) {
    console.error("Contact creation failed:", error);
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "failed to create contact";
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

export async function getAllContacts(){
  try {
     const response = await api.get("/contacts");
     const contacts = response.data;
    return contacts as Contact[];
  } catch (error) {
    console.log(error)
  }
}
