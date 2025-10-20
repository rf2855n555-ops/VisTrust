
'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, TrendingUp, Users } from 'lucide-react'

export function TrustSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const trustPoints = [
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Building lasting relationships through transparency, integrity, and consistent delivery.'
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Clear vision and precise execution that transforms challenges into opportunities.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Creating tangible value through data-driven insights and proven methodologies.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Seasoned expertise and innovative thinking to navigate complex transformations.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-6">
            Why Choose <span className="text-[#F5A623]">VisTrust</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with organizations from strategy through measurable impact, 
            always guided by trust, excellence, and results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints?.map((point, index) => {
            const IconComponent = point?.icon
            return (
              <motion.div
                key={point?.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center group">
                  <div 
                    className="w-14 h-14 bg-gradient-to-r from-[#004B87] to-[#F5A623] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#004B87] mb-3">
                    {point?.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point?.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
