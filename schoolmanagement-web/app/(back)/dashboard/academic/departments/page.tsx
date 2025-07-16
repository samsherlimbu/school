import { getAllClasses } from '@/actions/classes';
import { getAllDepartments } from '@/actions/departments';
import ClassManagement from '@/components/dashboard/classes';
import DepartmentListing from '@/components/dashboard/departments';
import React from 'react';

export default async function Page() {
  const departments = await getAllDepartments() || [];
  return (
    <div>
      <DepartmentListing departments={departments} />
    </div>
  );
}
