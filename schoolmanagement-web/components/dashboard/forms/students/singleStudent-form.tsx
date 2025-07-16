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
import countryList from "react-select-country-list";
import CustomPhoneInput from "@/components/FormInputs/phoneInput";
import { classType, Parent } from "@/types/types";
import { createStudent } from "@/actions/student";
import { Value } from "@radix-ui/react-select";
import generateRegistrationNumber from "@/lib/generatRegNo";
import generateRollNumber from "@/lib/generateRoll";

export type SelectOptionProps = {
  label: string;
  value: string;
};

type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  classes: classType[];
  parents: Parent[];
  nextSeq: number;
};

export type StudentProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  state: string;
  studentType: string;
  rollNo: string;
  regNo: string;
  admissionDate: string;
  parentId: string;
  classId: string;
  streamId: string;
  parentName?: string;
  classTitle?: string;
  streamTitle?: string;
  gender: string;
  imageUrl?: string;
  country: string;
  description: string;
};

export default function SingleStudentForm({
  editingId,
  initialData,
  classes,
  parents,
  nextSeq,
}: SingleStudentFormProps) {
  const parentOptions = parents.map((item) => {
    return { label: item.ParentName, value: item.id };
  });

  const [selectedParent, setSelectedParent] = useState<any>(null);

  //get the class options from the classes prop
  const classOptions = classes.map((item) => {
    return { label: item.title, value: item.id };
  });
  const [selectedClass, setSelectedClass] = useState<any>(
    classOptions[0] || null
  );
  const classId = selectedClass?.value || "";
  // Get the sections based on the selected class
  const sections = classes.find((item) => item.id === classId)?.streams || [];
  // Map sections to options
  const sectionsOptions = sections.map((item) => {
    return { label: item.title, value: item.id };
  });
  const [selectedSection, setSelectedSection] = useState<any>(
    sectionsOptions[0] || null
  );

  const provincesOfNepal = [
    { label: "Koshi", value: "Koshi" },
    { label: "Madhesh Province", value: "Madhesh Province" },
    { label: "Bagmati Province", value: "Bagmati Province" },
    { label: "Gandaki Province", value: "Gandaki Province" },
    { label: "Lumbini Province", value: "Lumbini Province" },
    { label: "Karnali Province", value: "Karnali Province" },
    { label: "Sudurpashchim Province", value: "Sudurpashchim Province" },
  ];

  const [selectedProvince, setSelectedProvince] = useState<any>(
    provincesOfNepal[0]
  );
  const studentType = [
    { label: "Private Student", value: "PS" },
    { label: "Scholar Student", value: "SS" },
  ];
  const [selectedStudentType, setSelectedStudentType] =
    useState<any>(studentType[0]) || null;

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [selectedGender, setSelectedGender] = useState<any>(genders[0] || null);

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
      data.parentId = selectedParent?.value || "";
      data.parentName = selectedParent?.label || "";
      data.classId = selectedClass?.value || "";
      data.state = selectedProvince?.value || "";
      data.classTitle = selectedClass?.label || "";
      data.streamId = selectedSection?.value || "";
      data.streamTitle = selectedSection?.label || "";
      data.gender = selectedGender?.value || "";
      data.country = selectedCountry?.label || "";
      data.studentType = selectedStudentType?.value || "";
      console.log(data);

      if (editingId) {
        // await updateCategoryById(editingId, data)
        // setLoading(false);
        // toast.success("Updated successfully");
        // reset();
        // router.push("/dashboard/category");
        // setImageUrl("/placeholder.svg");
      } else {
        const rollNo = generateRollNumber();
        const studentType = data.studentType as "PS" | "SS";
        const regNo = generateRegistrationNumber(nextSeq, studentType); // Example usage, you can modify the sequence as needed
        data.regNo = regNo;
        data.rollNo = rollNo;
        console.log(data);
        const res = await createStudent(data);
        setLoading(false);
        toast.success("Student Created successfully");
        reset();
        router.push("/dashboard/students");
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
              <FormSelectInput
                isSearchable={false}
                label="State / Province"
                options={provincesOfNepal}
                option={selectedProvince}
                setOption={setSelectedProvince}
              />
              <FormSelectInput
                isSearchable={false}
                label="StudentType"
                options={studentType}
                option={selectedStudentType}
                setOption={setSelectedStudentType}
              />
              {/* <TextInput
                register={register}
                errors={errors}
                label="Registration Number."
                name="regNo"
              /> */}
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
                options={parentOptions}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText="Add New parent"
                href="/dashboard/users/parents/new"
              />
              <FormSelectInput
                label="Class"
                options={classOptions}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add Class"
                href="/dashboard/academic/classes"
              />
              <FormSelectInput
                label="Section"
                options={sectionsOptions}
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
