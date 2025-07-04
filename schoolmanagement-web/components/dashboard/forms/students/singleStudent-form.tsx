"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "@/components/FormInputs/textinput";
import TextArea from "@/components/FormInputs/textAreaInput";
import ImageInput from "@/components/FormInputs/imageInput";
import FormFooter from "../formFooter";
import FormHeader from "../formHeader";
import PasswordInput from "@/components/FormInputs/passwordInput";
import FormSelectInput from "@/components/FormInputs/formSelectInput";
// Import country list manually
import countryList from "react-select-country-list";
import CustomPhoneInput from "@/components/FormInputs/phoneInput";

export type SelectOptionProps = {
  label: string;
  value: string;
};

type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type StudentProps = {
  name: string;
  email: string;
  password: string;
  phone?: string;
  imageUrl?: string;
  country?: string;
};

export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {
  const parents = [
    { label: "Jane Do", value: "12345676" },
    { label: "John Doe", value: "1234556" },
  ];

  const [selectedParent, setSelectedParent] = useState<any>(null);
  const classes = [
    { label: "1", value: "12345676" },
    { label: "2", value: "1234556" },
  ];
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const sections = [
    { label: "S1", value: "12345676" },
    { label: "S2", value: "1234556" },
  ];
  const [selectedSection, setSelectedSection] = useState<any>(null);

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [selectedGender, setSelectedGender] = useState<any>(null);

  // Get the list of countries using react-select-country-list
  const countryOptions = countryList().getData(); // It will return a list of country objects

  const [selectedCountry, setSelectedCountry] = useState<any>(
    countryOptions.find((c) => c.value === "US") || {
      label: "Select Country",
      value: "",
    }
  );
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StudentProps>({
    defaultValues: {
      name: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data);

      if (editingId) {
        // await updateCategoryById(editingId, data)
        // setLoading(false);
        // toast.success("Updated successfully");
        // reset();
        // router.push("/dashboard/category");
        // setImageUrl("/placeholder.svg");
      } else {
        // await createCategory(data)
        // setLoading(false);
        // toast.success("Created successfully");
        // reset();
        // router.push("/dashboard/category");
        // setImageUrl("/placeholder.svg");
      }
    } catch (error) {
      console.error("Error saving student", error);
      toast.error("Failed to save student");
      setLoading(false);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <FormHeader
        href="/students"
        parent=""
        title="Student"
        editingId={editingId}
        loading={loading}
      />
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid gap-3 md:grid-cols-3">
              <TextInput
                register={register}
                errors={errors}
                label="Student Name"
                name="name"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
              <CustomPhoneInput
                name="phone"
                label="Your Phone Number"
                setValue={setValue}
                watch={watch}
                errors={errors}
                defaultCountry="NP"
                required
              />
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="State"
                name="state"
                type="text"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Roll No"
                name="rollNo"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Registration Number."
                name="regNo"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Admission Date"
                name="admissionDate"
                type="date"
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
              />
              <FormSelectInput
                label="Parent"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText="Add New parent"
                href="/dashboard/users/parents/new"
              />
              <FormSelectInput
                label="Class"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add Class"
                href="/dashboard/academic/classes"
              />
              <FormSelectInput
                label="Section"
                options={sections}
                option={selectedSection}
                setOption={setSelectedSection}
                toolTipText="Add Section"
                href="/dashboard/academics/sections/new"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid md:grid cols-1 gap-3">
                <FormSelectInput
                  isSearchable={false}
                  label="Gender"
                  options={genders}
                  option={selectedGender}
                  setOption={setSelectedGender}
                  href="/dashboard/gender/new"
                />
                <FormSelectInput
                  isSearchable={true}
                  label="Country"
                  options={countryOptions} // List of country options
                  option={selectedCountry} // Pass the full object here
                  setOption={(option: any) => setSelectedCountry(option)} // Update the selected country with the full object
                  href="/dashboard/country/new"
                />
                <TextArea
                  register={register}
                  errors={errors}
                  label="Description"
                  name="description"
                />
              </div>

              <ImageInput
                title="Student Profile Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="studentProfileImage"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/students"
        editingId={editingId}
        loading={loading}
        title="Student"
        parent=""
      />
    </form>
  );
}
