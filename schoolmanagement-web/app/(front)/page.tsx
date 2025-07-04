import DashboardPreview from '@/components/frontend/dashboard-preview'
import GridFeatures from '@/components/frontend/features-grid'
import HeroSection from '@/components/frontend/hero-section'
import LogoCloud from '@/components/frontend/logo-cloud'
import Pricing from '@/components/frontend/pricing'
import TabbedFeatures from '@/components/frontend/tabbed-features'
import SiteHeader from '@/components/header'
import React from 'react'


const Home = () => {
  return (
    <div>
   <HeroSection />
   <LogoCloud />
   <DashboardPreview/>
   <GridFeatures />
   <Pricing/>
   <TabbedFeatures />
   
    </div>
  )
}

export default Home
