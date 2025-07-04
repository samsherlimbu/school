import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import SmallTypo from "./small-typo"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/grid-pattern.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container max-w-6xl mx-auto px-4 text-center">
        {/* Welcome Badge - Replaced SmallTypo with styled div */}
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <SmallTypo title="Welcome to Amarpur School" />
          </span>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Modernize Your School Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Streamline administrative tasks, enhance communication, and improve educational outcomes with our comprehensive school management solution.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full h-12 px-6 text-base bg-blue-600 hover:bg-blue-700">
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full h-12 px-6 text-base border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Explore Features <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}