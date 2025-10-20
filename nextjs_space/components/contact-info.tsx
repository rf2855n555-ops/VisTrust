
import { Card } from '@/components/ui/card'
import { Mail, Clock, Users, Award } from 'lucide-react'

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'vistrustconsulting@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 Hours',
      description: 'Quick turnaround guaranteed'
    }
  ]

  const highlights = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Seasoned executive leadership with decades of experience'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful transformations and lasting impact'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#004B87] mb-4">
          Let's Start the Conversation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Whether you're looking to transform your business strategy or optimize 
          your technology infrastructure, we're here to guide you from vision to value.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid gap-4">
        {contactDetails?.map((detail) => {
          const IconComponent = detail?.icon
          return (
            <Card key={detail?.title} className="p-6 border-l-4 border-l-[#F5A623] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#004B87] rounded-full flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#004B87] mb-1">
                    {detail?.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-1">
                    {detail?.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detail?.description}
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Why Choose Us */}
      <div className="pt-8">
        <h3 className="text-2xl font-bold text-[#004B87] mb-6">
          Why Choose VisTrust?
        </h3>
        <div className="space-y-4">
          {highlights?.map((highlight) => {
            const IconComponent = highlight?.icon
            return (
              <div key={highlight?.title} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#004B87] to-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#004B87] mb-1">
                    {highlight?.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight?.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Consultation Process */}
      <Card className="p-6 bg-gradient-to-br from-[#004B87] to-[#0066b3] text-white">
        <h3 className="text-xl font-bold mb-4">
          What to Expect
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Initial consultation to understand your challenges and goals</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Custom proposal tailored to your specific needs</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>Collaborative partnership from strategy to implementation</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
