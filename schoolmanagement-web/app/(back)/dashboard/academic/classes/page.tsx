import { getAllClasses } from '@/actions/classes';
import ClassManagement from '@/components/dashboard/classes';
import React from 'react';

export default async function Page() {
  const classes = await getAllClasses() || [];
  return (
    <div>
      <ClassManagement classes={classes} />
    </div>
  );
}
