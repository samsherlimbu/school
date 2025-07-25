"use client";
import React from "react";

import {
  BarChart,
  Bus,
  ChevronRight,
  Database,
  DollarSign,
  GraduationCap,
  Layout,
  MessageSquare,
  Settings,
  User2,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Logo from "@/components/logo";



// const data = {

//   teams: [
//     {
//       name: "Acme Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
// };


export default function AppSidebar() {
  //   const [activeTeam, setActiveTeam] = React.useState(data.teams[0]);
 
const sidebarlinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Layout,
    isActive: true,
    items: [
      {
        title: "Overview",
        url: "/dashboard/overview",
      },
    ],
  },
  {
    title: "Student Management",
    url: "/students",
    icon: Users,
    items: [
      {
        title: "Student Directory",
        url: "/dashboard/students",
      },
      {
        title: "Fees",
        url: "/dashboard/students/Fees",
      },
      {
        title: "Attendance",
        url: "/dashboard/students/attendance",
      },
      {
        title: "Students IDs",
        url: "/dashboard/students/ids",
      },
    ],
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
    items: [
      {
        title: "Parents",
        url: "/dashboard/users/parents",
      },
      {
        title: "Teachers",
        url: "/dashboard/users/teachers",
      },
      {
        title: "Secretary",
        url: "/dashboard/users/secretary",
      },
    ],
  },
  {
    title: "Academic",
    url: "/dashboard/academic",
    icon: GraduationCap,
    items: [
      {
        title: "Classes and Streams",
        url: "/dashboard/academic/classes",
      },
       {
        title: "Subjects",
        url: "/dashboard/academic/subjects",
      },
       {
        title: "Departments",
        url: "/dashboard/academic/departments",
      },
      {
        title: "Timetable",
        url: "/academic/timetable",
      },
      {
        title: "Examination",
        url: "/academic/examination",
      },
      {
        title: "Assignment",
        url: "/academic/assignment",
      },
      {
        title: "Report Cards",
        url: "/academic/report-cards",
      },
    ],
  },
  {
    title: "Staff Management",
    url: "/staff",
    icon: User2,
    items: [
      {
        title: "Staff Directory",
        url: "/staff/directory",
      },
      {
        title: "Attendance",
        url: "/staff/attendance",
      },
      {
        title: "Leave Management",
        url: "/staff/leave",
      },
      {
        title: "Performance",
        url: "/staff/performance",
      },
    ],
  },

  {
    title: "Communication",
    url: "/communication",
    icon: MessageSquare,
    items: [
      {
        title: "Messages",
        url: "/communication/messages",
      },
      {
        title: "Announcements",
        url: "/communication/announcements",
      },
      {
        title: "Notice Board",
        url: "/communication/notice-board",
      },
      {
        title: "Emergency Alerts",
        url: "/communication/emergency-alerts",
      },
    ],
  },
  {
    title: "Finance",
    url: "/finance",
    icon: DollarSign,
    items: [
      {
        title: "Fee Management",
        url: "/finance/fees",
      },
      {
        title: "Payments",
        url: "/finance/payments",
      },
      {
        title: "Scholarship",
        url: "/finance/scholarship",
      },
      {
        title: "Reports",
        url: "/finance/reports",
      },
    ],
  },
  {
    title: "Transport",
    url: "/transport",
    icon: Bus,
    items: [
      {
        title: "Routes",
        url: "/transport/routes",
      },
      {
        title: "Tracking",
        url: "/transport/tracking",
      },
      {
        title: "Drivers",
        url: "/transport/drivers",
      },
      {
        title: "Maintenance",
        url: "/transport/maintenance",
      },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    icon: Database,
    items: [
      {
        title: "Library",
        url: "/resources/library",
      },
      {
        title: "Inventory",
        url: "/resources/inventory",
      },
      {
        title: "Facilities",
        url: "/resources/facilities",
      },
      {
        title: "Assets",
        url: "/resources/assets",
      },
    ],
  },
  {
    title: "Reports & Analysis",
    url: "/reports",
    icon: BarChart,
    items: [
      {
        title: "Academic Report",
        url: "/reports/academic",
      },
      {
        title: "Financial Report",
        url: "/reports/financial",
      },
      {
        title: "Custom Report",
        url: "/reports/custom",
      },
      {
        title: "Analytics Dashboard",
        url: "/reports/analytics",
      },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    items: [
      {
        title: "School Profile",
        url: "/settings/school-profile",
      },
      {
        title: "User Management",
        url: "/settings/users",
      },
      {
        title: "System Settings",
        url: "/settings/system",
      },
      {
        title: "Backup & Security",
        url: "/settings/security",
      },
    ],
  },
  {
    title: "Admin Only",
    url: "/dashboard/admin",
    icon: Users,
    items: [
      {
        title: "Contacts",
        url: "/dashboard/admin/contacts",
      },
    ],
  },
];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Collapsible>
                <Logo />
              </Collapsible>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarlinks.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
           
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
