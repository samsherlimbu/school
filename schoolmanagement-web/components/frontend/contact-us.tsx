"use client";

import React, { useState } from "react";
import TextInput from "../FormInputs/textinput";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/submitButton";
import { Send } from "lucide-react";
import TextArea from "../FormInputs/textAreaInput";
import CustomPhoneInput from "../FormInputs/phoneInput";
import countryList from "react-select-country-list";
import FormSelectInput from "../FormInputs/formSelectInput";
import toast from "react-hot-toast";
import { createContact } from "@/actions/admin";

const roles = [
  { label: "Principal", value: "principal" },
  { label: "School Administrator", value: "school administrator" },
  { label: "Head Teacher", value: "Head teacher" },
  { label: "Teacher", value: "teacher" },
  { label: "Parents", value: "parents" },
  { label: "Student", value: "student" },
  { label: "Consultant", value: "consultant" },
  { label: "Others", value: "others" },
];

const media = [
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "Twitter", value: "twitter" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "YouTube", value: "youtube" },
  { label: "Other", value: "other" },
];

export type ContactProps = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: number;
  role: string;
  media: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [Loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(roles[0]);
  const [selectedMedia, setSelectedMedia] = useState<any>(media[0]);

  const countryOptions = countryList().getData(); // It will return a list of country objects

  const [selectedCountry, setSelectedCountry] = useState<any>(
    countryOptions.find((c) => c.value === "Nepal") || {
      label: "Select Country",
      value: "",
    }
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactProps>();

  async function onSubmit(data: ContactProps) {
    data.country = selectedCountry.label
    data.role = selectedRole.value;
    data.media = selectedMedia.value;
    data.students = Number(data.students);

    console.log("Submitted Data:", data);
    try {
      setLoading(true);
      const res = await createContact(data);
      console.log(res);
      setLoading(false);
      toast.success("Your request has been successfully submitted");
      reset();
    } catch (error) {
      setLoading(false);

      console.error("Error saving in contact", error);
      toast.error("Failed to save contact ");
    }
  }

  return (
    <section className="bg-gray-300 py-12 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Form container */}
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-4xl">
            <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
              Tell us about your institution and requirements
            </h3>
            <p className="text-gray-600 text-sm text-center px-2 sm:px-6 mb-6">
              Our team will reach out within 24 hours to schedule a personalized
              demo and discuss your specific needs.
            </p>

            {/* Form */}
            <form className="grid gap-y-6" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Your Full Name"
                register={register}
                name="fullName"
                type="text"
                errors={errors}
                placeholder="Enter Full Name"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Enter email address"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="School"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Enter your school name"
                />
                <FormSelectInput
                  label="Country"
                  options={countryOptions}
                  option={selectedCountry}
                  setOption={setSelectedCountry}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/University/Social Media Page"
                  register={register}
                  name="schoolPage"
                  errors={errors}
                  placeholder="https://www.schoolwebsite.com"
                />
                <TextInput
                  label="Number of Students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="Enter number of students"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormSelectInput
                  label="Role"
                  options={roles}
                  option={selectedRole}
                  setOption={setSelectedRole}
                />
                <FormSelectInput
                  label="Which Media did you hear about us"
                  options={media}
                  option={selectedMedia}
                  setOption={setSelectedMedia}
                />
              </div>

              <TextArea
                label="Please share with us the key pain points you want to solve"
                register={register}
                name="message"
                errors={errors}
              />

              <div className="w-full flex justify-center">
                <div className="w-full sm:w-1/2">
                  <SubmitButton
                    buttonIcon={Send}
                    title="Submit"
                    loading={Loading}
                    loadingTitle="Submitting..."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Contact CTA Boxes */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-700 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4">
              To create a more value-added solution, it's essential to analyze
              the possibilities of improvement.
            </p>
            <button className="w-full sm:w-auto bg-white text-green-700 px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-gray-100">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Contact our team</h3>
            <p className="text-sm mb-4">
              To create a more value-added solution, it's essential to analyze
              the possibilities of improvement.
            </p>
            <button className="w-full sm:w-auto bg-green-800 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-green-700">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
