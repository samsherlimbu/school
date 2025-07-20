"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Calendar,
  User,
  Heart,
  CreditCard,
  MessageCircle,
  GraduationCap,
  Book,
} from "lucide-react"
import { Teacher } from "@/types/types"

interface TeacherInfoModelProps {
  teacher: Teacher
  trigger?: React.ReactNode
}

export default function TeacherInfoModel({ teacher, trigger }: TeacherInfoModelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const infoCards = [
    { icon: Mail, label: "Email", value: teacher.email },
    { icon: Phone, label: "Phone", value: teacher.phone },
    { icon: User, label: "Gender", value: teacher.gender },
    { icon: Calendar, label: "Date of Birth", value: teacher.dateOfBirth },
    { icon: Calendar, label: "Joining Date", value: teacher.dateOfJoining },
    { icon: CreditCard, label: "National ID", value: teacher.NIN },
    { icon: Briefcase, label: "Designation", value: teacher.designation },
    { icon: GraduationCap, label: "Qualification", value: teacher.qualification },
    { icon: Book, label: "Main Subject", value: teacher.mainSubject },
    { icon: MapPin, label: "State", value: teacher.state },
    { icon: Globe, label: "Country", value: teacher.country },
    { icon: MapPin, label: "Address", value: teacher.address },
    { icon: MessageCircle, label: "Contact Method", value: teacher.preferenceContactMethod },
    { icon: Calendar, label: "Created", value: new Date(teacher.createdAt).toLocaleDateString() },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || <Button variant="outline">View</Button>}</DialogTrigger>
      <DialogContent className="w-full max-w-4xl rounded-xl px-6 py-8">
        <DialogTitle className="sr-only">Teacher Info</DialogTitle>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={teacher.imageUrl || `https://api.dicebear.com/6.x/initials/svg?seed=${teacher.firstName + teacher.lastName}`}
            />
            <AvatarFallback>
              {`${teacher.firstName[0] ?? ""}${teacher.lastName[0] ?? ""}`.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">
              {`${teacher.firstName} ${teacher.lastName}`}
            </h2>
            <Badge variant="outline" className="text-xs mt-1">
              {teacher.departmentName}
            </Badge>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-muted-foreground break-words">{item.value}</p>
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
