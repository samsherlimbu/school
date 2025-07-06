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

import { Check, FolderPlus, Pen, Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/FormInputs/textinput";
import SubmitButton from "@/components/FormInputs/submitButton";
import { StreamCreateProps } from "@/types/types";
import { createStream } from "@/actions/classes";

export type ClassProps = {
  name: string;
};

export default function SectionForm({
  classId,
  className,
  initialContent,
  editingId,
}: {
  classId: string;
  className: string;
  initialContent?: string;
  editingId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StreamCreateProps>({
    defaultValues: {
      title: initialContent || "",
    },
  });

  const [loading, setLoading] = useState(false);

 async function saveStream(data: StreamCreateProps) {
  data.classId = classId;
  data.title = `${className}-${data.title.trim().toUpperCase()}`;

  try {
    setLoading(true);
    if (editingId) {
      // update logic
    } else {
      await createStream(data);
      toast.success("Successfully Created!");
      reset();
    }
  } catch (error) {
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
              <Button className="bg-blue-600 text-white flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Section
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Section" : "Add New Section"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveStream)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <div className="flex items-center">
                        <span className="bg-gray-100 px-3 py-2 text-sm flex items-center whitespace-nowrap">  {className}</span>
                      <input
                        {...register("title", {
                          required: "Section title is required",
                        })}
                        className="border px-3 py-2 rounded-md w-full"
                        placeholder="A"
                      />
                    </div>
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}

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
