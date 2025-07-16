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
import { createParent } from "@/actions/parent";

export type SelectOptionProps = {
  label: string;
  value: string;
};

type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type ParentProps = {
  ParentName: string;
  email: string;
  relationShip: string;
  NIN: string;
  gender: string;
  dob: string;
  state: string;
  occupation: string;
  address: string;
  preferenceContactMethod: string;
  password: string;
  phone: string;
  imageUrl?: string;
  country: string;
};

export default function ParentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {


  const provincesOfNepal = [
    { label: "Koshi", value: "Koshi" },
    { label: "Madhesh Province", value: "Madhesh Province" },
    { label: "Bagmati Province", value: "Bagmati Province" },
    { label: "Gandaki Province", value: "Gandaki Province" },
    { label: "Lumbini Province", value: "Lumbini Province" },
    { label: "Karnali Province", value: "Karnali Province" },
    { label: "Sudurpashchim Province", value: "Sudurpashchim Province" },
  ];
  const [selectedProvince, setSelectedProvince] = useState<any>(provincesOfNepal[0]);

  const relationships = [
    { label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" },
    { label: "Brother", value: "Brother" },
    { label: "Sister", value: "Sister" },
    { label: "Guardian", value: "Guardian" },
    { label: "Other", value: "Other" },
  ];
  const [selectedRelationShip, setSelectedRelationShip] = useState<any>(relationships[0]);
  const PreferenceContactMethod = [
    { label: "Phone", value: "Phone" },
    { label: "Email", value: "Email" },
    
  ];
  const [selectedPrefernceContactMethod, setSelectedPreferenceContactMethod] =
    useState<any>(PreferenceContactMethod[0]);

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    
  ];
  const [selectedGender, setSelectedGender] = useState<any>(genders[0]);

  // Get the list of countries using react-select-country-list
  const countryOptions = countryList().getData(); // It will return a list of country objects

const defaultCountry = countryOptions.find((c) => c.value === "Nepal") || countryOptions[0];
const [selectedCountry, setSelectedCountry] = useState<any>(defaultCountry);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ParentProps>({
    defaultValues: {
      ParentName: "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  

  async function saveStudent(data: ParentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
          // 🟡 Assign selected dropdown values manually
    data.relationShip = selectedRelationShip?.value || "";
    data.gender = selectedGender?.value || "";
    data.state = selectedProvince?.value || "";
    data.country = selectedCountry?.label || "";
    data.preferenceContactMethod = selectedPrefernceContactMethod?.value || "";
      console.log(data);

      if (editingId) {
        // await updateCategoryById(editingId, data)
        // setLoading(false);
        // toast.success("Updated successfully");
        // reset();
        // router.push("/dashboard/category");
        // setImageUrl("/placeholder.svg");
      } else {
       const res = await createParent(data)
        setLoading(false);
        toast.success("Parent is Created successfully");
        reset();
        router.push("/dashboard//users/parents");
      
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
        href="/parents"
        parent="users"
        title="Parent"
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
                label="Parent Name"
                name="ParentName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
              <FormSelectInput
                label="relationShip"
                options={relationships}
                option={selectedRelationShip}
                setOption={setSelectedRelationShip}
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
                label="NationalID/Password"
                name="NIN"
              />
              <FormSelectInput
                isSearchable={false}
                label="State / Province"
                options={provincesOfNepal}
                option={selectedProvince}
                setOption={setSelectedProvince}
              />

              <PasswordInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
              />
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
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid md:grid cols-1 gap-3">
                <FormSelectInput
                  label="Preference Contact Method"
                  options={PreferenceContactMethod}
                  option={selectedPrefernceContactMethod}
                  setOption={setSelectedPreferenceContactMethod}
                  href="/dashboard/contact/new"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Occupation"
                  name="occupation"
                />

                <TextArea
                  register={register}
                  errors={errors}
                  label="Address"
                  name="address"
                />
              </div>

              <ImageInput
                title="Parent Profile Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="parentProfileImage"
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
