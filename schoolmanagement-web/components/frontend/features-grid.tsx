import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./section-header";

const features = [
  {
    title: "Student Information System",
    description: "Centralized student data management including admissions, academic records, and attendance tracking with secure parent access.",
    image: "/images/image.avif",
    altText: "Student profile dashboard showing academic records and attendance"
  },
  {
    title: "Academic Management",
    description: "Complete curriculum planning, class scheduling, and grade management system with automated progress tracking.",
    image: "/images/image1.avif",
    altText: "Academic calendar and curriculum planning interface"
  },
  {
    title: "Finance & Fee Management",
    description: "Comprehensive financial system for fee collection, expense tracking, and automated payment processing.",
    image: "/images/image.avif",
    altText: "Financial dashboard showing fee collection and expenses"
  },
  {
    title: "Communication Hub",
    description: "Unified platform for announcements, parent-teacher interaction, and real-time updates about school activities.",
    image: "/images/image1.avif",
    altText: "Communication platform interface with messaging and announcements"
  }
];

export default function GridFeatures() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <SectionHeader
          title="All Features"
          heading="Streamline Your School Operations"
          description="Transform your educational institution with our comprehensive school management system designed to enhance efficiency and improve learning outcomes."
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Image
                  src={feature.image}
                  alt={feature.altText}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
