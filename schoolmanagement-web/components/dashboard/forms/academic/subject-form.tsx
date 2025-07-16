"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Check, Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/textinput";
import SubmitButton from "@/components/FormInputs/submitButton";
import {  SubjectCreateProps } from "@/types/types";
import toast from "react-hot-toast";
import FormSelectInput from "@/components/FormInputs/formSelectInput";
import { DepartmentOption } from "../../subject-form";
import { createDepartment } from "@/actions/departments";
import { createSubject } from "@/actions/subjects";

export type ClassProps = {
  name: string;
};

export default function SubjectForm({
  userId,
  initialContent,
  editingId,
  departments,
}: {
  userId?: string;
  initialContent?: string;
  editingId?: string;
  departments: DepartmentOption[];
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubjectCreateProps>({
    defaultValues: {
      name: initialContent || "",
    },
  });

  const subjectCategoryOptions = [
    { label: "CORE", value: "CORE" },
    { label: "ELECTIVE", value: "ELECTIVE" },
    { label: "ADDITIONAL", value: "ADDITIONAL" },
    { label: "VOCATIONAL", value: "VOCATIONAL" },
    { label: "LANGUAGE", value: "LANGUAGE" },
    { label: "EXTRA_CURRICULAR", value: "EXTRA_CURRICULAR" },
  ];
  const [subjectCategory, setSubjectCategory] = useState<any>(
    subjectCategoryOptions[0] || null
  );

  const subjectTypeOptions = [
    { label: "THEORY", value: "THEORY" },
    { label: "PRACTICAL", value: "PRACTICAL" },
    { label: "BOTH", value: "BOTH" },
  ];

  const [subjectType, setSubjectType] = useState<any>(
    subjectTypeOptions[0] || null
  );

  const [loading, setLoading] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<any>(
    departments[0] || null
  );

  async function saveSubject(data : SubjectCreateProps) {
    data.departmentId=selectedDepartment.value;
    data.departmentName=selectedDepartment.label;
    data.category=subjectCategory.value;
    data.type=subjectType.value;
    try {
      setLoading(true);
      if (editingId) {
        // await updateFolderById(editingId, data);
        // toast.success("Updated Successfully!");
      } else {
        await createSubject(data);
        toast.success("Successfully Created!");
        reset();
      }
    } catch (error: any) {
      const errorMessage = error?.message || "Something went wrong";
      toast.error(errorMessage); // ✅ Show the error toast
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="py-1">
        <Dialog>
          <DialogTrigger asChild>
            {editingId ? (
              <button title="Edit Folder" className="text-blue-600">
                <Pencil className="w-4 h-4 " />
              </button>
            ) : (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Subject</span>
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Subject" : "Add New Subject"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveSubject)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Name"
                      name="name"
                      icon={Check}
                    />
                    <div className="grid gap-3 md:grid-cols-2">
                      <TextInput
                        register={register}
                        errors={errors}
                        label="Short Name"
                        name="shortName"
                        placeholder="Math"
                      />
                      <TextInput
                        register={register}
                        errors={errors}
                        label="Subject Code"
                        name="code"
                        placeholder="MATH101"
                      />
                      <FormSelectInput
                        isSearchable={false}
                        label="Subject Category"
                        options={subjectCategoryOptions}
                        option={subjectCategory}
                        setOption={setSubjectCategory}
                      />

                      <FormSelectInput
                        isSearchable={false}
                        label="Subject Type"
                        options={subjectTypeOptions}
                        option={subjectType}
                        setOption={setSubjectType}
                      />
                    </div>
                    <div className="grid gap-3 ">
                      <FormSelectInput
                        isSearchable={false}
                        label="Department"
                        options={departments}
                        option={selectedDepartment}
                        setOption={setSelectedDepartment}
                        toolTipText="Add Department"
                        href="/dashboard/academic/departments"
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <SubmitButton
                      title={editingId ? "Update" : "Add"}
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
