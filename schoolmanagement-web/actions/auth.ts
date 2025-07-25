"use server"

import { User } from "@/store/auth";
import axios from "axios";
import { cookies } from "next/headers";


const BASE_API_URL = process.env.API_URL || "";

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function loginUser(data:{email:string,password:string}){

    try {
         const response = await api.post("/login", data);
          const { user, accessToken, refreshToken } = response.data.data;
            const userData = response.data.data;
            await createServerSession(userData)
            return response.data.data as SessionData;

        
    } catch (error) {
        console.log(error)
    }

}

//Session data schema 
interface SessionData {
  user:User,
  accessToken:string,
  refreshToken:string,
}

//server action  to createa user session

export async function createServerSession(
  data:SessionData

){
  try {
    const cookieStore = await cookies()

    //set cookies with appropriate expiration
    cookieStore.set("user",JSON.stringify(data.user),{
      httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      sameSite:"strict",
      maxAge:60*60,//60 minutes 
    })

    cookieStore.set("accessToken",data.accessToken,{
        httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      sameSite:"strict",
      maxAge:60*60,//60 minutes
    })

    cookieStore.set("refreshToken",data.refreshToken,{
         httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      sameSite:"strict",
      maxAge:60*60*24*30,//30 days
    });
    return {success:true};

  } catch (error) {

    console.error("session creation error ",error)
    return{success:false,error:"invalid session data"}
    
  }
}


//server action to logout and clear cookies
export async function logout() {
  
  try {
    const cookieStore = await cookies()

    cookieStore.delete("user");
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return{success:true}
  } catch (error) {
    console.error("logout error",error)
    return{success:false,error:"logout failed"}
  }
}

//helper function to get the currennt user from cookies (server-side)
export async function getServerUser() {
  

  const cookieStore= await cookies()

  const userCookie = cookieStore.get("user")

  if(!userCookie) return null;

  try {
    const user = JSON.parse(userCookie.value)
    return user as User;
  } catch (error) {
    return null;
  }
  
}