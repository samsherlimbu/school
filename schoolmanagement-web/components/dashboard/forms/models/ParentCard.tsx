"use client"

import type React from "react"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Globe, Briefcase, Calendar, User, Heart, CreditCard, MessageCircle } from "lucide-react"
import { useState } from "react"
import { Parent } from "@/types/types"



interface ParentInfoModelProps {
  parent: Parent
  trigger?: React.ReactNode
}

export default function ParentInfoModel({ parent, trigger }: ParentInfoModelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const infoCards = [
    { icon: Mail, label: "Email", value: parent.email },
    { icon: Phone, label: "Phone", value: parent.phone },
    { icon: Heart, label: "Relationship", value: parent.relationShip },
    { icon: User, label: "Gender", value: parent.gender },
    { icon: Calendar, label: "Date of Birth", value: parent.dob },
    { icon: CreditCard, label: "National ID/Passport", value: parent.NIN },
    { icon: Briefcase, label: "Occupation", value: parent.occupation },
    { icon: MapPin, label: "State", value: parent.state },
    { icon: Globe, label: "Country", value: parent.country },
    { icon: MapPin, label: "Address", value: parent.address },
    { icon: MessageCircle, label: "Contact Method", value: parent.preferenceContactMethod },
    { icon: Calendar, label: "Created", value: new Date(parent.createdAt).toLocaleDateString() },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || <Button variant="outline">View</Button>}</DialogTrigger>
      <DialogContent className="w-full max-w-4xl rounded-xl px-6 py-8">
        {/* Accessibility title (invisible) */}
        <DialogTitle className="sr-only">Parent Info</DialogTitle>

        {/* Header: Avatar, name, relationship */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={parent.imageUrl || `https://api.dicebear.com/6.x/initials/svg?seed=${parent.ParentName}`}
            />
            <AvatarFallback>
              {parent.ParentName.split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">{parent.ParentName}</h2>
            <Badge variant="outline" className="text-xs mt-1">
              {parent.relationShip}
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
