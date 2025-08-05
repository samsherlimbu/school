"use server"

import { SchoolProps } from "@/components/dashboard/forms/school/school-onboarding";
import { School } from "@/types/types";

import axios from "axios";


const BASE_API_URL = process.env.API_URL || ""

 export const api = axios.create({
    baseURL : BASE_API_URL,
    timeout : 5000,
    headers :{
        'Content-Type':'application/json'
    }
});
export async function createSchool(data:SchoolProps) {
   
    try {
            const response = await api.post('/schools',data);
            return response.data.data as School;
    } catch (error) {
        if(axios.isAxiosError(error)){
            const message = error.response?.data?.message || "failed to create school "
            throw new Error(message)
        }
        throw error;
        
    }

    
}
export async function getSchoolById(id:string | undefined | null) {
if(id){
      try {
     const response = await api.get(`/schools/${id}`);
     const school = response.data.data;
    return school as School;
  } catch (error) {
    console.log(error)
  }
}else{
    const school={
        id:null,
        name:null,
        logo:null,
        slug:null
    }
    return school
}
}


// export async function createContact(data:ContactProps) {
//     const endpoint =`${BASE_API_URL}/v1/contacts`
//     try {
//             const response = await api.post('/contacts',data);
//             return response.data;
//     } catch (error) {
//         if(axios.isAxiosError(error)){
//             const message = error.response?.data?.message || "failed to create contact "
//             throw new Error(message)
//         }
//         throw error;
        
//     }

    
// }