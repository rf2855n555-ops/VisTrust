
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Send, Mail } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const openGmailCompose = () => {
    const subject = encodeURIComponent(`Consultation Request from ${formData?.name || 'Website Visitor'}`)
    const body = encodeURIComponent(`
Name: ${formData?.name || 'Not provided'}
Email: ${formData?.email || 'Not provided'}
Company: ${formData?.company || 'Not provided'}

Message:
${formData?.message || 'No message provided'}

---
This message was sent from the VisTrust Consulting website contact form.
    `.trim())
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=vistrustconsulting@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, save to database
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to submit form')
      }

      // Show success message
      toast.success(result?.message || 'Thank you for your message!')
      
      // Open Gmail compose
      openGmailCompose()

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })

    } catch (error) {
      console.error('Form submission error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-8 shadow-lg border-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#004B87] mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Tell us about your challenges and goals. We'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData?.name || ''}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData?.email || ''}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="h-11"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData?.company || ''}
            onChange={handleChange}
            placeholder="Your company name"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData?.message || ''}
            onChange={handleChange}
            required
            placeholder="Tell us about your goals, challenges, and how we can help..."
            rows={5}
            className="resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="flex-1 bg-[#004B87] hover:bg-[#0066b3] text-white h-12"
          >
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={openGmailCompose}
            className="flex-1 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white h-12"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Directly
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          * Required fields. We respect your privacy and will never share your information.
        </p>
      </form>
    </Card>
  )
}
