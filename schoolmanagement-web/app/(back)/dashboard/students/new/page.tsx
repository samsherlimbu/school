

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import BulkStudentForm from "@/components/dashboard/forms/students/bulkStudent-form"
import SingleStudentForm from "@/components/dashboard/forms/students/singleStudent-form"
import { InfoBanner } from "@/components/info-banner"


export default function AdmissionTabs() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 mt-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="flex w-full space-x-1 rounded-lg bg-white p-1 shadow-lg shadow-blue-200 mb-6">
          <TabsTrigger
            value="single"
            className="w-full rounded-lg py-3 px-4 text-sm font-medium ring-offset-white transition-all bg-gray-100 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Single Student Admission
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="w-full rounded-lg py-3 px-4 text-sm font-medium ring-offset-white transition-all bg-gray-100 hover:bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            <Users className="mr-2 h-4 w-4" />
            Bulk Student Admission
          </TabsTrigger>
        </TabsList>
        
          <Card className="shadow-indigo-400 shadow-lg">
            <CardContent className="p-6">
            <TabsContent value="single" className="mt-0">
              <InfoBanner message="Please first create the parent and Class" type="info"  />
            <SingleStudentForm/>
          </TabsContent>
          <TabsContent value="bulk" className="mt-0">
            <BulkStudentForm />
          </TabsContent>
            </CardContent>
         
          </Card>
        
      </Tabs>
    </div>
  )
}

