"use client";
import React from "react";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Contact, Parent } from "@/types/types";
import ParentInfoModel from "@/components/dashboard/forms/models/ParentCard";
import Image from "next/image";

export const columns: ColumnDef<Parent>[] = [
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
      const parent = row.original;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={parent.imageUrl || "/images/student.png"} // ✅ fallback to default image
            alt={parent.ParentName}
            width={512}
            height={512}
            className="w-10 h-10 rounded-full"
          />

          <div className="">
            <h2 className="font-medium capitalize">
              {parent.ParentName.toLowerCase()}
            </h2>
            <p className="text-xs text-muted-foreground">
              {parent.relationShip}
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
      const parent = row.original;
      return (
        <div className="">
          <h2 className="font-medium capitalize">
            {parent.email.toLowerCase()}
          </h2>
          <p className="text-xs text-muted-foreground">{parent.phone}</p>
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
    cell: ({ row }) => <ParentInfoModel parent={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const parent = row.original;
      return (
        <ActionColumn
          row={row}
          model="parent"
          editEndpoint={`#`}
          id={parent.id?.toString()}
        />
      );
    },
  },
];
