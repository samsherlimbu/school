"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "@/components/FormInputs/textinput";
import ImageInput from "@/components/FormInputs/imageInput";
import FormFooter from "../formFooter";
import SubmitButton from "@/components/FormInputs/submitButton";
import { LogIn, Send } from "lucide-react";
import { createSchool } from "@/actions/school";


export type SelectOptionProps = {
  label: string;
  value: string;
};

type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type SchoolProps = {
  name: string;
  logo:string;
  slug: string;
  // password: string;
  // imageUrl?: string;
  // country?: string;
};

export default function SchoolOnboarding({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchoolProps>({
    defaultValues: {
      name: "",
      
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: SchoolProps) {
    try {
      setLoading(true);
      data.logo = imageUrl;
      console.log(data);

      const res = await createSchool(data);
      console.log(res)
      setLoading(false);
      toast.success("Created successfully");
      reset();
       
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
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <div className="text-center">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Welcome To AmarpurSchool
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Complete your school's profile to get started with the AmarpurSchool.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="School Name"
                name="name"
              />
              <ImageInput
                title="Customise Your School Logo"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="schoolLogo"
                className="object-contain"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
      <SubmitButton
        buttonIcon={Send}
        title="Register School"
        loading={loading}
        loadingTitle="Creating please wait..."
      />
    </form>
  );
}
