 "use server";

import { BriefClass, ClassCreateProps, classType, Stream, StreamCreateProps, Teacher, TeacherCreateProps, UserCreateProps } from "@/types/types";
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

export async function createUsers(data: UserCreateProps) {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    console.error("Admin creation failed:", error);
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




