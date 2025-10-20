
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-r from-[#004B87] via-[#0066b3] to-[#004B87] text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#F5A623] rounded-full translate-x-20 translate-y-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-[#F5A623]">Vision</span> into <span className="text-[#F5A623]">Value</span>?
          </h2>
          
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Partner with VisTrust Consulting to navigate change, drive growth, and achieve 
            sustainable competitive advantage through trusted advisory services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-[#F5A623] hover:bg-[#e89610] text-white px-10 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-[#004B87] px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/about">
                  Learn About Our Approach
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
