
import { Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | VisTrust Consulting',
  description: 'Learn about Elvin McLaughlin and the VisTrust Consulting mission to provide trusted advisory services from vision to value.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-6">
              About VisTrust Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded on the belief that trust is the cornerstone of transformation, 
              we bring clarity, strategy, and results to organizations navigating change.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/founder.jpg"
                  alt="Elvin McLaughlin, Founder of VisTrust Consulting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004B87] mb-6">
                Meet Elvin McLaughlin
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  As a seasoned executive with decades of experience in both management 
                  and technology consulting, Elvin McLaughlin founded VisTrust Consulting 
                  with a clear mission: to help organizations transform their vision into 
                  measurable value.
                </p>
                <p>
                  Throughout his career, Elvin has guided countless organizations through 
                  complex transformations, always with a focus on building trust, 
                  delivering results, and creating lasting impact.
                </p>
                <p>
                  His unique blend of strategic thinking and operational excellence 
                  enables him to bridge the gap between high-level vision and 
                  ground-level execution.
                </p>
              </div>
              <Button asChild size="lg" className="bg-[#F5A623] hover:bg-[#e89610] text-white">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004B87] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with organizations from strategy through measurable impact, 
              always guided by our core values.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#004B87]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004B87] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#004B87] mb-4">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships through transparency, integrity, 
                  and consistent delivery on our commitments.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#F5A623]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#004B87] mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Delivering exceptional results through deep expertise, 
                  innovative thinking, and meticulous attention to detail.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#004B87]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#004B87] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#004B87] mb-4">Impact</h3>
                <p className="text-gray-600">
                  Creating meaningful, measurable value that drives sustainable 
                  growth and competitive advantage.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004B87] mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive consulting services across two core domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-[#004B87] to-[#0066b3] text-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6">Management Consulting</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-[#F5A623]" />
                  <span>Business Transformation Strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-[#F5A623]" />
                  <span>Leadership Development & Excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-[#F5A623]" />
                  <span>Organizational Change Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-[#F5A623]" />
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#F5A623] to-[#e89610] text-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6">IT Consulting</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white" />
                  <span>Smart Software Vendor Selection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white" />
                  <span>Process Optimization & Automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white" />
                  <span>Technology Strategy & Roadmapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-white" />
                  <span>Digital Transformation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#004B87] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vision into Value?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how VisTrust Consulting can help drive your organization's success.
          </p>
          <Button asChild size="lg" className="bg-[#F5A623] hover:bg-[#e89610] text-white px-8 py-3">
            <Link href="/contact">
              Schedule Your Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
