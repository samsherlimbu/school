
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { User } from 'lucide-react'

interface WelcomeBannerPorps{
userName:string;
userSchool:string;
userRole:string
}


export default function WelcomeBanner({userName,userRole,userSchool}:WelcomeBannerPorps) {
  return (
    <Card className='bg-gradient-to-r from-blue-500 to-blue-600 border-none shadow-lg'>
        <CardContent className='p-6'>
            <div className='flex items-center space-x-4'>
                <div className='bg-white p-2 rounded-full'>
                 <User className='h-6 w-6 text-blue-500'/>
                </div>
            </div>
            <h2 className='text-2xl font-bold text-white'>Welcome back,{userName}!</h2>
            <p className='text-blue-100'>{userRole} at {userSchool}</p>
        </CardContent>
    </Card>
  )
}
