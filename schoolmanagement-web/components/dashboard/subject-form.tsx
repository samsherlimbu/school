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
import { Book, Pencil, School, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Grid3X3,
  Target,
  Building2,
  Calendar,
  CalendarClock,
  Hash,
} from "lucide-react";
import SubjectForm from "./forms/academic/subject-form";
import { Subject } from "@/types/types";

const subjects = [
  {
    id: "s1",
    name: "Mathematics",
    slug: "mathematics",
    code: "MATH101",
    shortName: "Math",
    category: "CORE",
    type: "THEORY",
    passingMarks: 40,
    totaMarks: 100,
    departmentId: "1",
    departmentName: "Mathematics Department",
    isActive: true,
    isOptinal: false,
    hasTheory: true,
    hasPractical: false,
    labRequired: false,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-12-20"),
  },
  {
    id: "s2",
    name: "Physics",
    slug: "physics",
    code: "SCI101",
    shortName: "Phys",
    category: "CORE",
    type: "BOTH",
    passingMarks: 45,
    totaMarks: 100,
    departmentId: "2",
    departmentName: "Science Department",
    isActive: true,
    isOptinal: false,
    hasTheory: true,
    hasPractical: true,
    labRequired: true,
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "s3",
    name: "Art",
    slug: "art",
    code: "ART101",
    shortName: "Art",
    category: "EXTRA_CURRICULAR",
    type: "PRACTICAL",
    passingMarks: 30,
    totaMarks: 100,
    departmentId: "3",
    departmentName: "Arts Department",
    isActive: true,
    isOptinal: true,
    hasTheory: false,
    hasPractical: true,
    labRequired: false,
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2024-02-01"),
  },
];

export type DepartmentOption = {
  label: string;
  value: string;
};

export default function StudentListing({
  departments,
  subjects,
}: {
  departments: DepartmentOption[];
  subjects: Subject[];
}) {
 const [selectedSubject, setSelectedSubject] = useState(subjects?.[0] || null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:flex w-80 flex-col border-r">
        <div className="pb-1 border-b">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <School className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Subjects</h2>
            </div>
            <SubjectForm departments={departments} />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 ${
                selectedSubject.id === subject.id ? "bg-muted" : ""
              }`}
              onClick={() => {
                setSelectedSubject(subject);
                setIsMobileOpen(false);
              }}
            >
              <span className="font-medium">{subject.name} Subject</span>
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
            <SheetTitle>Subjects</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 mt-4">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 ${
                  selectedSubject.id === subject.id ? "bg-muted" : ""
                }`}
                onClick={() => {
                  setSelectedSubject(subject);
                  setIsMobileOpen(false);
                }}
              >
                <span className="font-medium">{subject.name}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" aria-label="Edit Subject">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Delete Subject"
                  >
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
            <h1 className="text-2xl font-bold">
              {" "}
              {selectedSubject?.name || "Select a Subject"}
            </h1>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium ">
                  Subject Code
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {selectedSubject?.code}
                </div>
                <div className="text-sm text-muted-foreground">
                  {selectedSubject?.shortName}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Category</CardTitle>
                <Grid3X3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {selectedSubject?.category}
                </div>
                <div className="text-sm text-muted-foreground">
                  {selectedSubject?.type}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium ">Marks</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {selectedSubject?.totaMarks}
                </div>
                <div className="text-sm text-muted-foreground">
                  Passing: {selectedSubject?.passingMarks}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subject Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Department:
                  </span>
                  <span className=" text-sm ">
                    {selectedSubject?.departmentName}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Created:
                  </span>
                  <span className=" text-sm">
                    {selectedSubject?.createdAt
                      ? format(
                          new Date(selectedSubject.createdAt),
                          "MMMM do, yyyy"
                        )
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Last Updated:
                  </span>
                  <span className=" text-sm">
                    {selectedSubject?.updatedAt
                      ? format(
                          new Date(selectedSubject.updatedAt),
                          "MMMM do, yyyy"
                        )
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Slug:</span>
                  <span className=" text-sm ">{selectedSubject?.slug}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subject Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Active:
                    </span>
                    <Badge
                      variant={
                        selectedSubject?.isActive ? "default" : "secondary"
                      }
                    >
                      {selectedSubject?.isActive ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Optional:
                    </span>
                    <Badge
                      variant={
                        selectedSubject?.isOptinal ? "default" : "secondary"
                      }
                    >
                      {selectedSubject?.isOptinal ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Has Theory:
                    </span>
                    <Badge
                      variant={
                        selectedSubject?.hasTheory ? "default" : "secondary"
                      }
                    >
                      {selectedSubject?.hasTheory ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      :Has Practical
                    </span>
                    <Badge
                      variant={
                        selectedSubject?.hasPractical ? "default" : "secondary"
                      }
                    >
                      {selectedSubject?.hasPractical ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Lab Required:
                    </span>
                    <Badge
                      variant={
                        selectedSubject?.labRequired ? "default" : "secondary"
                      }
                    >
                      {selectedSubject?.labRequired ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

{
  /* Mobile Drawer */
}
