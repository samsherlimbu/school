import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ParentForm from "@/components/dashboard/forms/users/parent-form";

export default function AdmissionTabs() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 mt-6">
      <Card className="shadow-indigo-400 shadow-lg">
        <CardContent className="p-6">
          <ParentForm />
        </CardContent>
      </Card>
    </div>
  );
}
