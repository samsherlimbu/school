"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap, Search, Users, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ClassForm from "./forms/academic/class-form";
import SectionForm from "./forms/academic/section-form";
import { classType } from "@/types/types";

export default function ClassManagement({ classes }: { classes: classType[] }) {
  
  const [selectedClass, setSelectedClass] = useState<classType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("All Classes:", classes);
  }, [classes]);

  const filteredClasses = classes.filter((classItem) =>
    classItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClass = (classId: string) => {
    console.log("Edit class", classId);
  };

  const handleDeleteClass = (classId: string) => {
    console.log("Delete class", classId);
  };

  return (
    <div className="grid h-[100vh] md:grid-cols-[330px_1fr] p-4">
      {/* Sidebar */}
      <div className="flex flex-col bg-white">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Classes</h2>
          </div>
          <ClassForm />
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search classes..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-8.5rem)]">
          <div className="space-y-1 p-2">
            {filteredClasses.map((classItem) => (
              <div
                key={classItem.id}
                onClick={() => setSelectedClass(classItem)}
                className={`group rounded-lg transition-colors cursor-pointer ${
                  selectedClass?.id === classItem.id
                    ? "bg-muted"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="font-medium">{classItem.title}</div>
                  <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClass(classItem.id);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClass(classItem.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{classItem.streams.length} streams</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex flex-col bg-white p-6 border border-zinc-200 rounded-lg">
        {selectedClass ? (
          <>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <div>
                <h1 className="text-xl font-semibold">{selectedClass.title}</h1>
                <p className="text-sm text-gray-500">
                  Classes / {selectedClass.title}
                </p>
                
              </div>
              <SectionForm classId={selectedClass.id} />
            </div>

            {/* Stream Grid or Empty Message */}
            {selectedClass.streams.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {selectedClass.streams.map((stream) => (
                  <Card key={stream.id} className="group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">
                          {stream.title}
                        </CardTitle>
                        <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Edit stream", stream.id);
                            }}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Delete stream", stream.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm">
                        <span className="font-medium"> Slug:</span> {stream.slug}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ID: {stream.id}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 text-center mt-10 text-sm">
                Empty stream
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">Select a class</div>
        )}
      </div>
    </div>
  );
}
