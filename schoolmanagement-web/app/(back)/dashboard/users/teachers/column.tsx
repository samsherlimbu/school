"use client";
import React from "react";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Contact, Parent, Teacher } from "@/types/types";
import ParentInfoModel from "@/components/dashboard/forms/models/ParentCard";
import Image from "next/image";
import TeacherInfoModel from "@/components/dashboard/forms/models/TeacherCard";

export const columns: ColumnDef<Teacher>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={teacher.imageUrl || "/images/student.png"} // ✅ fallback to default image
            alt={teacher.firstName}
            width={512}
            height={512}
            className="w-10 h-10 rounded-full"
          />

          <div className="">
            <h2 className="font-medium capitalize">
           {teacher.firstName} {teacher.lastName}
            </h2>
            <p className="text-xs text-muted-foreground">
              {teacher.gender}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "Email-Phone",
    header: "Email-Phone",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <div className="">
          <h2 className="font-medium capitalize">
            {teacher.email.toLowerCase()}
          </h2>
          <p className="text-xs text-muted-foreground">{teacher.phone}</p>
        </div>
      );
    },
  },

  // {
  //   accessorKey: "fullName",
  //   header: ({ column }) => <SortableColumn column={column} title="fullName" />,
  // },

  // {
  //   accessorKey: "email",
  //   header: 'email',
  // },
  // {
  //   accessorKey: "phone",
  //   header: "phone",
  // },
  // {
  //   accessorKey: "school",
  //   header: "school",
  // },
  {
    accessorKey: "country",
    header: "country",
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Category Image",
  //   cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  // },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => <TeacherInfoModel teacher={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <ActionColumn
          row={row}
          model="teacher"
          editEndpoint={`#`}
          id={teacher.id?.toString()}
        />
      );
    },
  },
];
