import { getAllClasses } from "@/actions/classes";
import {  getBriefDepartments } from "@/actions/departments";
import { getAllSubjects } from "@/actions/subjects";

import SubjectListing from "@/components/dashboard/subject-form";
import React from "react";

export default async function Page() {
  const departments = (await getBriefDepartments()) || [];
  const subjects = (await getAllSubjects()) || [];
  return (
    <div>
      <SubjectListing
      subjects={subjects}
        departments={departments.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })}
      />
    </div>
  );
}
