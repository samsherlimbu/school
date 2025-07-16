"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Book,
  BookOpen,
  Calendar,
  DollarSign,
  GraduationCap,
  Pencil,
  School,
  Trash2,
  User,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { format } from "date-fns";
import DepartmentForm from "./forms/academic/department-form";
import { Department } from "@/types/types";

// ✅ Sample Data with unique IDs
const departments = [
  {
    id: "1",
    name: "Mathematics Department",
    slug: "mathematics",
    createdAt: new Date("2023-01-05"),
    updatedAt: new Date("2023-12-20"),
    hodId: "hod1",
    hodName: "Dr. Alan Karki",
    hodStartDate: new Date("2023-01-05"),
    budget: 300000,
    budgetYear: "2023-2024",
    teachers: [
      { id: "t1", name: "John Doe", subject: "Advanced Mathematics" },
      { id: "t2", name: "Jane Smith", subject: "Geometry" },
    ],
    subjects: [
      { id: "s1", name: "Calculus", code: "MATH01" },
      { id: "s2", name: "Algebra", code: "MATH02" },
    ],
  },
  {
    id: "2",
    name: "Science Department",
    slug: "science",
    createdAt: new Date("2022-03-15"),
    updatedAt: new Date("2024-01-10"),
    hodId: "hod2",
    hodName: "Dr. Maya Shrestha",
    hodStartDate: new Date("2022-03-15"),
    budget: 500000,
    budgetYear: "2023-2024",
    teachers: [
      { id: "t3", name: "Alice Rana", subject: "Physics" },
      { id: "t4", name: "Robert Singh", subject: "Biology" },
    ],
    subjects: [
      { id: "s3", name: "Physics", code: "SCI01" },
      { id: "s4", name: "Biology", code: "SCI02" },
    ],
  },
];

export default function DepartmentListing({
  departments,
}: {
  departments: Department[];
}) {
  const [selectDept, setSelectDept] = useState(departments[0]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-80 flex-col border-r">
        <div className="pb-1 border-b">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <School className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Departments</h2>
            </div>
            <DepartmentForm />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className={`p-4 flex items-center justify-between hover:bg-muted/50 cursor-pointer ${
                selectDept.id === dept.id ? "bg-muted" : ""
              }`}
              onClick={() => setSelectDept(dept)}
            >
              <span className="font-medium">{dept.name} Department</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Mobile Drawer */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Departments</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 mt-4">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className={`p-4 flex items-center justify-between hover:bg-muted/50 cursor-pointer ${
                  selectDept.id === dept.id ? "bg-muted" : ""
                }`}
                onClick={() => {
                  setSelectDept(dept);
                  setIsMobileOpen(false);
                }}
              >
                <span className="font-medium">{dept.name}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileOpen(true)}
            >
              <Users className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">{selectDept.name} Department</h1>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Teachers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {/* {selectDept.teachers.length} */}3
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subjects</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {/* {selectDept.subjects.length} */}3
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Annual Budget
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {/* ${selectDept.budget?.toLocaleString()} */}
                  $75000
                </div>
                <p className="text-sm text-muted-foreground">
                  {/* Fiscal Year: {selectDept.budgetYear} */}
                  FY: 2023-2024
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Department Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Created:
                  </span>
                  <span className="text-sm">
                    {format(selectDept.createdAt, "PPP")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">HOD:</span>
                  <span className="text-sm font-medium">
                    {/* {selectDept.hodName} */}
                    Dr. Alan Karki
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    HOD Since:
                  </span>
                  <span className="text-sm">
                    {/* {format(selectDept.hodStartDate, "PPP")} */}
                    2023-01-05
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "t3", name: "Alice Rana", subject: "Physics" },
                    { id: "t4", name: "Robert Singh", subject: "Biology" },
                  ].map((teacher) => (
                    <div
                      key={teacher.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {teacher.subject}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { id: "s1", name: "Calculus", code: "MATH01" },
                    { id: "s2", name: "Algebra", code: "MATH02" },
                  ].map((subject, index) => (
                    <div
                      key={`${subject.code}-${index}`} // ✅ Unique key
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{subject.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {subject.code}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
