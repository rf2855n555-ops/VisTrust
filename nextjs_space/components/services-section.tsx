
'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Settings, Users, TrendingUp, Laptop, CheckCircle, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Users,
      title: 'Management Consulting',
      subtitle: 'Business Transformation & Leadership Excellence',
      description: 'Guide your organization through complex transformations with strategic thinking and operational excellence.',
      features: [
        'Business Transformation Strategy',
        'Leadership Development',
        'Organizational Change Management',
        'Performance Optimization'
      ],
      color: '#004B87',
      gradient: 'from-[#004B87] to-[#0066b3]'
    },
    {
      icon: Laptop,
      title: 'IT Consulting',
      subtitle: 'Smart Technology Solutions & Process Optimization',
      description: 'Streamline operations through intelligent software selection and optimized processes.',
      features: [
        'Software Vendor Selection',
        'Process Automation',
        'Technology Strategy',
        'Digital Transformation'
      ],
      color: '#F5A623',
      gradient: 'from-[#F5A623] to-[#e89610]'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in two domains where strategy meets execution, 
            delivering transformation that creates lasting value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services?.map((service, index) => {
            const IconComponent = service?.icon
            return (
              <motion.div
                key={service?.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full p-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group cursor-pointer">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${service?.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#004B87] mb-2">
                        {service?.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">
                        {service?.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service?.description}
                    </p>

                    {/* Features */}
                    <div className="flex-grow">
                      <ul className="space-y-3 mb-8">
                        {service?.features?.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            className="flex items-center"
                          >
                            <CheckCircle className="h-5 w-5 mr-3 text-[#F5A623]" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full bg-[#004B87] hover:bg-[#0066b3] text-white group/btn"
                      >
                        <Link href="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
