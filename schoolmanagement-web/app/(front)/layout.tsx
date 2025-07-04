import SiteFooter from '@/components/frontend/site-footer'
import SiteHeader from '@/components/header'
import React, { ReactNode } from 'react'

export default function Frontlayout({children}:{children:ReactNode}) {
  return (
    <div>
          <SiteHeader />
      {children}
      <SiteFooter/>
    </div>
  )
}
