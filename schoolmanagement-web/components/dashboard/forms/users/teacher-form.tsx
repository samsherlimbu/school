// updated
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
import CustomPhoneInput from "@/components/FormInputs/phoneInput";
import countryList from "react-select-country-list";
// import { createTeacher } from "@/actions/teacher";

export type TeacherFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender: string;
  imageUrl?: string;
  password?: string;
  employeeId: string;
  dateOfJoining: string;
  designation: string;
  departmentId?: string;
  departmentName: string;
  mainSubject?: string;
  qualification: string;
  subjects: string;
  classes: string;
  classIds: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelation?: string;
  experience?: string;
  bio?: string;
  skills?: string;
};

type TeacherFormProps = {
  editingId?: string;
  initialData?: any;
};

export default function TeacherForm({
  editingId,
  initialData,
}: TeacherFormProps) {
  const provincesOfNepal = [
    { label: "Koshi", value: "Koshi" },
    { label: "Madhesh Province", value: "Madhesh Province" },
    { label: "Bagmati Province", value: "Bagmati Province" },
    { label: "Gandaki Province", value: "Gandaki Province" },
    { label: "Lumbini Province", value: "Lumbini Province" },
    { label: "Karnali Province", value: "Karnali Province" },
    { label: "Sudurpashchim Province", value: "Sudurpashchim Province" },
  ];
  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const departmentOptions = [
    { label: "Science", value: "Science" },
    { label: "Math", value: "Math" },
  ];
  const mainSubjects = [
    { label: "Math", value: "Math" },
    { label: "Science", value: "Science" },
    { label: "English", value: "English" },
    { label: "Social Studies", value: "Social Studies" },
    { label: "Computer", value: "Computer" },
  ];
  const subjects = [
    { label: "Math", value: "Math" },
    { label: "Science", value: "Science" },
    { label: "English", value: "English" },
    { label: "Social Studies", value: "Social Studies" },
    { label: "Computer", value: "Computer" },
  ];
  const classOptions = [
    { label: "Math", value: "Math" },
    { label: "Science", value: "Science" },
    { label: "English", value: "English" },
    { label: "Social Studies", value: "Social Studies" },
    { label: "Computer", value: "Computer" },
  ];
  const qualifications = [
    { label: "Bachelor", value: "Bachelor" },
    { label: "Diploma", value: "Diploma" },
    { label: "Master", value: "Master" },
  ];
  const experienceOptions = [
    { label: "1 year", value: "1 year" },
    { label: "2 years", value: "2 years" },
    { label: "3 years", value: "3 years" },
    { label: "4+ years", value: "4+ years" },
  ];

  const PreferenceContactMethod = [
    { label: "Phone", value: "Phone" },
    { label: "Email", value: "Email" },
  ];
  const [selectedPrefernceContactMethod, setSelectedPreferenceContactMethod] =
    useState<any>(PreferenceContactMethod[0]);

  const [selectedProvince, setSelectedProvince] = useState(provincesOfNepal[0]);
  const [selectedGender, setSelectedGender] = useState(genders[0]);
  const [selectedMainSubject, setSelectedMainSubject] = useState(
    mainSubjects[0]
  );
  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentOptions[0] || null
  );
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [selectedQualification, setSelectedQualification] = useState(
    qualifications[0]
  );
  const [selectedClass, setSelectedClass] = useState<any>(
    classOptions[0] || null
  );
  const [selectedExperience, setSelectedExperience] = useState(
    experienceOptions[0]
  );
  const countryOptions = countryList().getData();
  const defaultCountry =
    countryOptions.find((c) => c.value === "Nepal") || countryOptions[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TeacherFormValues>({
    defaultValues: initialData || {},
  });

  async function onSubmit(data: TeacherFormValues) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      data.gender = selectedGender.value;
      data.state = selectedProvince.value;
      data.country = selectedCountry.label;
      data.mainSubject = selectedMainSubject.value;
      data.qualification = selectedQualification.value;
      data.experience = selectedExperience.value;

      if (editingId) {
        // await updateTeacher(editingId, data)
        // toast.success("Teacher updated successfully");
      } else {
        // await createTeacher(data);
        // toast.success("Teacher created successfully");
        // reset();
        // router.push("/dashboard/users/teachers");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save teacher");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader
        href="/teachers"
        parent="users"
        title="Teacher"
        editingId={editingId}
        loading={loading}
      />
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid gap-3 md:grid-cols-3">
              <TextInput
                label="First Name"
                name="firstName"
                register={register}
                errors={errors}
              />
              <TextInput
                label="Last Name"
                name="lastName"
                register={register}
                errors={errors}
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
              />
              <CustomPhoneInput
                name="phone"
                label="Phone"
                setValue={setValue}
                watch={watch}
                errors={errors}
                defaultCountry="NP"
                required
              />
              <TextInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                register={register}
                errors={errors}
              />
              <FormSelectInput
                label="Gender"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
              />
              <TextInput
                label="National ID/Passport NO"
                name="employeeId"
                register={register}
                errors={errors}
              />
              <TextInput
                label="Date of Joining"
                name="dateOfJoining"
                type="date"
                register={register}
                errors={errors}
              />
              <TextInput
                label="Designation"
                name="designation"
                register={register}
                errors={errors}
              />
              {/* <TextInput
                label="Department Name"
                name="departmentName"
                register={register}
                errors={errors}
              /> */}
              <FormSelectInput
                label="Department"
                options={departmentOptions}
                option={selectedDepartment}
                setOption={setSelectedDepartment}
                href="/dashboard/academic/department/new"
              />
              <FormSelectInput
                label="Main Subject"
                options={mainSubjects}
                option={selectedMainSubject}
                setOption={setSelectedMainSubject}
              />
              <FormSelectInput
                label="Side Subjects"
                options={subjects}
                option={selectedSubject}
                setOption={setSelectedSubject}
              />
              <FormSelectInput
                label="Qualification"
                options={qualifications}
                option={selectedQualification}
                setOption={setSelectedQualification}
              />

              <FormSelectInput
                label="Class"
                options={classOptions}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add Class"
                href="/dashboard/academic/classes"
              />
              {/* <TextInput
                label="Class ID"
                name="classIds"
                register={register}
                errors={errors}
              /> */}
              {/* <TextInput
                label="City"
                name="city"
                register={register}
                errors={errors}
              /> */}
              {/* <TextInput
                label="Postal Code"
                name="postalCode"
                register={register}
                errors={errors}
              /> */}
              <FormSelectInput
                label="State / Province"
                options={provincesOfNepal}
                option={selectedProvince}
                setOption={setSelectedProvince}
              />

              {/* <TextInput
                label="Emergency Contact Name"
                name="emergencyContactName"
                register={register}
                errors={errors}
              /> */}
              <FormSelectInput
                label="Preference Contact Method"
                options={PreferenceContactMethod}
                option={selectedPrefernceContactMethod}
                setOption={setSelectedPreferenceContactMethod}
                href="/dashboard/contact/new"
              />
              {/* <TextInput
                label="Emergency Contact Relation"
                name="emergencyContactRelation"
                register={register}
                errors={errors}
              />
             */}
              {/* <TextInput
                label="Skills"
                name="skills"
                register={register}
                errors={errors}
              /> */}
              <PasswordInput
                label="Password"
                name="password"
                register={register}
                errors={errors}
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid md:grid cols-1 gap-3">
                <FormSelectInput
                  label="Experience"
                  options={experienceOptions}
                  option={selectedExperience}
                  setOption={setSelectedExperience}
                />
                <FormSelectInput
                  label="Country"
                  options={countryOptions}
                  option={selectedCountry}
                  setOption={setSelectedCountry}
                />
                <TextArea
                  label="Address"
                  name="address"
                  register={register}
                  errors={errors}
                />
              </div>
              <ImageInput
                title="Teacher Profile Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="teacherProfileImage"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/teachers"
        editingId={editingId}
        loading={loading}
        title="Teacher"
        parent="users"
      />
    </form>
  );
}
