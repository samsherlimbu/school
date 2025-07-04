'use client'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ServerCrash } from 'lucide-react'
import Link from "next/link"

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50/50 px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-center space-y-6 sm:space-y-8 bg-slate-200 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
        
        {/* Icon */}
        <div className="mx-auto w-16 sm:w-20 h-16 sm:h-20 bg-red-500 rounded-full flex items-center justify-center">
          <ServerCrash className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">500 - Server Error</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Oops! Something went wrong on our servers. We&apos;re working to fix the issue.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/">
            <Button variant="default" className="w-full sm:w-auto">
              Go to Homepage
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto text-blue-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-6 text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Agrikkom. All rights reserved.
        </div>
      </div>
    </div>
  )
}
