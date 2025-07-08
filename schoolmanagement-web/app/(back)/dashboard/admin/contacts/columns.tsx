"use client";
 import React from "react";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Contact } from "@/types/types";
import ContactInfoModel from "@/components/DataTableColumns/ContactCard";

export const columns: ColumnDef<Contact>[] = [
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
    header:'User',
    cell:({row})=>{
      const contact = row.original;
      return (
        <div className="">
          <h2 className="font-medium capitalize">
            {
              contact.fullName.toLowerCase()
            }
          </h2>
          <p className="text-xs text-muted-foreground">{contact.school}</p>
        </div>
      )
    }
  },
      {
    accessorKey: "Email-Phone",
    header:'Email-Phone',
    cell:({row})=>{
      const contact = row.original;
      return (
        <div className="">
          <h2 className="font-medium capitalize">
            {
              contact.email.toLowerCase()
            }
          </h2>
          <p className="text-xs text-muted-foreground">{contact.phone}</p>
        </div>
      )
    }
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
    cell: ({ row }) => <ContactInfoModel contact={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <ActionColumn
          row={row}
          model="contact"
          editEndpoint={`#`}
          id={contact.id?.toString()}

        />
      );
    },
  },
];