"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Calendar,
  User,
  CreditCard,
  BookOpen,
  MapPin,
  Globe,
  PenLine,
  Landmark,
  FileText,
} from "lucide-react";
import { Student } from "@/types/types";

interface StudentInfoModelProps {
  student: Student;
  trigger?: React.ReactNode;
}

export default function StudentInfoModel({
  student,
  trigger,
}: StudentInfoModelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const infoCards = [
    { icon: Mail, label: "Email", value: student.email },
    { icon: Phone, label: "Phone", value: student.phone },
    { icon: Calendar, label: "Date of Birth", value: student.dob },
    { icon: CreditCard, label: "Roll No", value: student.rollNo },
    { icon: CreditCard, label: "Reg. No", value: student.regNo },
    { icon: Calendar, label: "Admission Date", value: student.admissionDate },
    { icon: User, label: "Gender", value: student.gender },
    { icon: MapPin, label: "State", value: student.state },
    { icon: Globe, label: "Country", value: student.country },
    { icon: FileText, label: "Description", value: student.description },
    { icon: BookOpen, label: "Class", value: student.classTitle || "N/A" },
    { icon: PenLine, label: "Stream", value: student.streamTitle || "N/A" },
    { icon: Landmark, label: "Parent", value: student.parentName || "N/A" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">View</Button>}
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl rounded-xl px-6 py-8">
        <DialogTitle className="sr-only">Student Info</DialogTitle>

        {/* Header: Avatar, name, gender */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={
                student.imageUrl ||
                `https://api.dicebear.com/6.x/initials/svg?seed=${student.name}`
              }
            />
            <AvatarFallback>
              {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">{student.name}</h2>
            <Badge variant="outline" className="text-xs mt-1 capitalize">
              {student.gender}
            </Badge>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground break-words">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
