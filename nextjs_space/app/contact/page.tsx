
import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'

export const metadata: Metadata = {
  title: 'Contact | VisTrust Consulting',
  description: 'Get in touch with VisTrust Consulting to discuss your management and IT consulting needs.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your vision into value? 
              Let's start the conversation about your organization's success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
