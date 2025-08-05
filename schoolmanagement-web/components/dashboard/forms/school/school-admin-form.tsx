"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "@/components/FormInputs/textinput";
import SubmitButton from "@/components/FormInputs/submitButton";
import {  Lock, Mail, Phone, Send, User } from "lucide-react";
import { createSchool } from "@/actions/school";
import PasswordInput from "@/components/FormInputs/passwordInput";
import { UserCreateProps } from "@/types/types";
import { createUsers } from "@/actions/users";


export type SelectOptionProps = {
  label: string;
  value: string;
};



export default function SchoolAdminForm({schoolId,schoolName}:{schoolId:string,schoolName:string}) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserCreateProps>({
    defaultValues: {
      name: "",
      
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);


  async function saveAdmin(data: UserCreateProps) {
    try {
      setLoading(true);
      data.schoolId = schoolId;
      data.schoolName=schoolName;
      data.role="ADMIN"
      console.log(data);

      const res = await createUsers(data);
      console.log(res)
      setLoading(false);
      toast.success("Admin Created successfully");
      reset();
      router.push("/dashboard")
       
    } catch (error) {
      setLoading(false);
      console.error("Error saving student", error);
      toast.error("Failed to save student");
    }
    // finally {
    // // ✅ Always stop the loading spinner
    // setLoading(false);
    // }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveAdmin)}>
      <div className="text-center">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Welcome To {schoolName}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
         Create Admin for this School.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-3">
               <TextInput
                register={register}
                errors={errors}
                label="Admin Name"
                name="name"
                icon={User}
              />
               <TextInput
                register={register}
                errors={errors}
                label="Admin email"
                name="email"
                icon={Mail}
              />
                <TextInput
                register={register}
                errors={errors}
                label="Admin Phone"
                name="phone"
                icon={Phone}
              />
                <PasswordInput
                register={register}
                errors={errors}
                label="Admin Password"
                name="password"
                icon={Lock}
              />
              
            </div>
          </div>
        </div>
      </div>
      <SubmitButton
        buttonIcon={Send}
        title="Create School Admin"
        loading={loading}
        loadingTitle="Creating please wait..."
      />
    </form>
  );
}
