"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  Building,
  MapPin,
  Globe,
  Users,
  Briefcase,
  Calendar,
} from "lucide-react"
import { useState } from "react"

interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
  school: string
  country: string
  schoolPage: string
  students: number
  role: string
  media: string
  message: string
  createdAt: string
}

interface ContactInfoModelProps {
  contact: Contact
  trigger?: React.ReactNode
}

export default function ContactInfoModel({ contact, trigger }: ContactInfoModelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const infoCards = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Building, label: "School", value: contact.school },
    { icon: MapPin, label: "Country", value: contact.country },
    { icon: Globe, label: "School Page", value: contact.schoolPage },
    { icon: Users, label: "Students", value: contact.students.toString() },
    { icon: Briefcase, label: "Role", value: contact.role },
    { icon: Calendar, label: "Joined", value: contact.createdAt },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">View</Button>}
      </DialogTrigger>

      <DialogContent className="w-full max-w-4xl rounded-xl px-6 py-8">
        {/* Accessibility title (invisible) */}
        <DialogTitle className="sr-only">Contact Info</DialogTitle>

        {/* Header: Avatar, name, media */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${contact.fullName}`}
            />
            <AvatarFallback>
              {contact.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">{contact.fullName}</h2>
            <Badge variant="outline" className="text-xs mt-1">
              {contact.media}
            </Badge>
          </div>
        </div>

        {/* Info Cards Grid */}
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
