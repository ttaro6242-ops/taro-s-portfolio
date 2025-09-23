import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would integrate with your email service
    // Examples: SendGrid, Resend, Nodemailer, etc.

    // For now, we'll simulate a successful email send
    console.log("Contact form submission:", {
      name,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // In a real implementation, you would:
    // 1. Send email to your inbox
    // 2. Send confirmation email to the user
    // 3. Store the message in a database (optional)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
