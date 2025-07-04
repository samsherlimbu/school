import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, DollarSign, LineChart } from "lucide-react";
import SmallTypo from "./small-typo";
import SectionHeader from "./section-header";

const coreFeatures = [
  {
    icon: Users,
    tabTitle: "Students",
    title: "Student Management",
    shortTitle: "Complete Student Lifecycle",
    description:
      "Streamline the entire student journey from admission to graduation with our comprehensive student management system.",
    image: "/images/image.avif",
    subFeatures: [
      "Digital admission & enrollment process",
      "Student profile & document management",
      "Academic performance tracking",
      "Attendance & behavior monitoring",
      "Parent portal access",
      "Alumni database management",
      "Student health records",
      "Scholarship management",
    ],
  },
  {
    icon: GraduationCap,
    tabTitle: "Academics",
    title: "Academic Management",
    shortTitle: "Smart Academic Planning",
    description:
      "Enhance educational delivery with our integrated academic management tools designed for modern education.",
    image: "/images/image1.avif",
    subFeatures: [
      "Curriculum & syllabus planning",
      "Class scheduling & timetable",
      "Homework & assignment tracking",
      "Learning resource management",
      "Online class integration",
      "Subject & teacher allocation",
      "Course material distribution",
      "Academic calendar management",
    ],
  },
  {
    icon: DollarSign,
    tabTitle: "Finance",
    title: "Financial Management",
    shortTitle: "Efficient Fee Management",
    description:
      "Simplify financial operations with our comprehensive school finance management system.",
    image: "/images/image.avif",
    subFeatures: [
      "Fee structure management",
      "Online payment processing",
      "Expense tracking",
      "Payroll management",
      "Budget planning",
      "Financial reporting",
      "Invoice generation",
      "Payment reminder system",
    ],
  },
  {
    icon: LineChart,
    tabTitle: "Analytics",
    title: "Analytics & Reporting",
    shortTitle: "Data-Driven Insights",
    description:
      "Make informed decisions with comprehensive analytics and reporting tools tailored for educational institutions.",
    image: "/images/image1.avif",
    subFeatures: [
      "Performance analytics",
      "Attendance insights",
      "Financial reporting",
      "Student progress tracking",
      "Custom report generation",
      "Trend analysis",
      "Department-wise analytics",
      "Real-time dashboards",
    ],
  },
];

export default function TabbedFeatures() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          
          <div className="flex items-center justify-center gap-2">
            <SectionHeader
              title="Additional Features"
              heading="Empower Your Institution with Intelligent Educational Management"
              description="Experience seamless integration of academic, administrative, and analytical tools designed specifically for modern educational institutions. Our comprehensive solution transforms how you manage everything from student records to financial operations, enabling data-driven decision-making and enhanced educational outcomes."
            />
          </div>
        </div>

        {/* Feature Tabs */}
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm h-14 ">
            {coreFeatures.map((feature) => (
              <TabsTrigger
                key={feature.tabTitle}
                value={feature.tabTitle.toLowerCase()}
                className="data-[state=active]:bg-indigo-200"
              >
                <span className="flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  {feature.tabTitle}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {coreFeatures.map((feature) => (
            <TabsContent
              key={feature.tabTitle}
              value={feature.tabTitle.toLowerCase()}
            >
              <Card className="mt-6 p-8 grid grid-cols-2 gap-12">
                {/* Left Column - Feature Description */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {feature.subFeatures.slice(0, 4).map((subFeature) => (
                      <li key={subFeature} className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="rounded-full w-2 h-2 p-0"
                        />
                        {subFeature}
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>

                {/* Right Column - Feature Details */}
                <div className="space-y-6">
                  <img
                    src={feature.image}
                    alt={`${feature.tabTitle} feature`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
