import SchoolOnboarding from '@/components/dashboard/forms/school/school-onboarding'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function page() {
  return (
   <div>
     <div className=" max-w-3xl mx-auto p-8">
          <Card className="shadow-indigo-400 shadow-lg">
            <CardContent className="p-6">
           <SchoolOnboarding />
            </CardContent>
         
          </Card>
    </div>
   </div>
  )
}
