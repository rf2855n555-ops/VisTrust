
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004B87] via-[#0066b3] to-[#004B87] text-white">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Trusted Advisory:</span>
            <span className="text-[#F5A623]">From Vision to Value</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            At VisTrust Consulting, trust is the cornerstone of transformation. 
            We bring clarity, strategy, and results to organizations navigating change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#F5A623] hover:bg-[#e89610] text-white px-8 py-4 text-lg group"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#004B87] px-8 py-4 text-lg"
            >
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center space-x-3 text-lg"
            >
              <CheckCircle className="h-6 w-6 text-[#F5A623]" />
              <span>Management Consulting Excellence</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center space-x-3 text-lg"
            >
              <CheckCircle className="h-6 w-6 text-[#F5A623]" />
              <span>Smart IT Solutions</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
