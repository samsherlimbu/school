import React from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllStudents } from "@/actions/student";
import { columns } from "./columns";
 
export default async function page() {
  const students = (await getAllStudents()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Students"
        linkTitle="Add Student"
        href="/dashboard/students/new"
        data={students}
        model="Parent"
      />
      <div className="py-8">
        <DataTable data={students} columns={columns} />
      </div>
    </div>
  );
}