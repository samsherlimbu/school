import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import TeacherForm from "@/components/dashboard/forms/users/teacher-form";
import { getAllBriefClasses } from "@/actions/classes";
import { getBriefDepartments } from "@/actions/departments";
import { getBriefSubjects } from "@/actions/subjects";


export default async function AdmissionTabs() {
  //class
  const classesData = await getAllBriefClasses() || []; 
  //department
  const departmentsData = await getBriefDepartments() || []; 
  //subject
  const subjectsData = await getBriefSubjects() || []; 


  const classes = classesData.map((item) => ({
    value: item.id,
    label: item?.title,
  }));
   const departments = departmentsData.map((dept) => ({
    value: dept.id,
    label: dept?.name,
   })
  );
  const subjects = subjectsData.map((subj) => ({
    value: subj.id,
    label: subj.name,
  }));
  return (
    <div className="w-full max-w-6xl mx-auto p-4 mt-6">
      <Card className="shadow-indigo-400 shadow-lg">
        <CardContent className="p-6">
          <TeacherForm classes={classes} departmemts={departments} subjects={subjects} />
        </CardContent>
      </Card>
    </div>
  );
}
