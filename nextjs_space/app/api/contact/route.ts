
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name),
        email: String(email),
        company: company ? String(company) : null,
        message: String(message),
        status: 'new',
        formType: 'general',
      },
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!',
      id: submission.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Sorry, there was an error submitting your message. Please try again.' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
