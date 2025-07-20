import React from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParents } from "@/actions/parent";
import { columns } from "./column";
import { getAllTeachers } from "@/actions/teachers";
 
export default async function page() {
  const teachers = (await getAllTeachers()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Teacher"
        linkTitle="Add Teacher"
        href="/dashboard/users/teachers/new"
        data={teachers}
        model="Teacher"
      />
      <div className="py-8">
        <DataTable data={teachers} columns={columns} />
      </div>
    </div>
  );
}