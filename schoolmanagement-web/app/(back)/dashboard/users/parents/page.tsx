import React from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParents } from "@/actions/parent";
import { columns } from "./column";
 
export default async function page() {
  const parents = (await getAllParents()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Parents"
        linkTitle="Add Parent"
        href="/dashboard/users/parents/new"
        data={parents}
        model="Parent"
      />
      <div className="py-8">
        <DataTable data={parents} columns={columns} />
      </div>
    </div>
  );
}