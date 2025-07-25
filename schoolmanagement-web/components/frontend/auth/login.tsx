"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomCarousel from "../custom-carousel";
import SubmitButton from "@/components/FormInputs/submitButton";
import TextInput from "@/components/FormInputs/textinput";
import Logo from "@/components/logo";
import PasswordInput from "@/components/FormInputs/passwordInput";
import { Lock, LogIn, Mail } from "lucide-react";
import { loginUser } from "@/actions/auth";
import { useUserSession } from "@/store/auth";
import { User } from "@/types/types";

export type LoginInputProps = {
  
  email: string;
  password: string;
  
};
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);   
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  const{setUser}=useUserSession();
  const router = useRouter();
  async function onSubmit(data: LoginInputProps) {
    try {
      setIsLoading(true)
      const sessionData= await loginUser(data)
      //save the data in zustand
      setUser(sessionData?.user as User)

      const role =sessionData?.user.role
      //Route the user according to the role
      console.log(role)
      setIsLoading(false)
      if(role==="SUPER_ADMIN"){
        router.push("/school-onboarding")
      }else{
        router.push("/dashboard")
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      
    }
    console.log(data);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute left-1/4 top-5 md:top-5 md:left-5">
            <Logo />
          </div>
          <div className="grid gap-2 text-center mt-10">
            <h1 className="text-3xl font-bold">Login to your Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
           
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
              icon={Mail}
              
            />
             <TextInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="************"
              icon={Lock}
              />
          
            {/* <PasswordInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              icon={Lock}
              forgotPasswordLink="/forgot-Password"
            /> */}

            <SubmitButton
            buttonIcon={LogIn}
              title="Sign In"
              loading={isLoading}
              loadingTitle="Signing in please wait..."
            />
          </form>
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}