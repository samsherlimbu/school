import NotFound from "@/app/not-found"
import SchoolAdminForm from "@/components/dashboard/forms/school/school-admin-form"
import { Card, CardContent } from "@/components/ui/card"


export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ schoolId: string}>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const schoolId = (await params).schoolId
    const name = (await searchParams).name
    if(!schoolId || !name){
        return NotFound
    }

  return(
     <div className=" max-w-3xl mx-auto p-8">
        <Card className="shadow-indigo-400 shadow-lg">
          <CardContent className="p-6">
            <SchoolAdminForm schoolId={schoolId} schoolName={name as string} />
          </CardContent>
        </Card>
      </div>
  )
}