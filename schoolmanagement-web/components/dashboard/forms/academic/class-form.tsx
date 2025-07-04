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


import { Check,  Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/textinput";
import SubmitButton from "@/components/FormInputs/submitButton";
import { ClassCreateProps } from "@/types/types";
import { createClass } from "@/actions/classes";
import toast from "react-hot-toast";




export type ClassProps={
name: string;
}
 

 
export default function ClassForm({
  userId,
  initialContent,
  editingId,
}: {
  userId?: string;
  initialContent?: string;
  editingId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClassCreateProps>({
    defaultValues: {
      title: initialContent || "",
    },
  });
 
  const [loading, setLoading] = useState(false);
 
 async function saveClass(data: ClassCreateProps) {
  try {
    setLoading(true);
    if (editingId) {
      // await updateFolderById(editingId, data);
      // toast.success("Updated Successfully!");
    } else {
      await createClass(data);
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
                <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Class</span>
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Class" : "Add New Class"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveClass)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label=""
                      name="title"
                      icon={Check}
                    />
                    {/* <IconInput
                      onIconSelect={setSelectedIcon}
                      selectedIcon={selectedIcon}
                    /> */}
                  </div>
                </div>
                <div className="py-3">
                  <SubmitButton
                    title={editingId ? "Update" : "Add"}
                    loading={loading}
                  />
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 