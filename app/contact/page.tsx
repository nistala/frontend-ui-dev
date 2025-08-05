import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help with your questions and projects.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@modernapp.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Tech Street, San Francisco, CA 94105",
    description: "Come say hello at our HQ",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday: 8am - 6pm PST",
    description: "We're here to help",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-heading-1 mb-6">Get in Touch</h1>
            <p className="text-body text-xl mb-8">
              Have a question about our services or want to discuss your next project? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card className="card">
                <CardHeader>
                  <CardTitle className="text-heading-2">Send us a message</CardTitle>
                  <CardDescription className="text-body">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project or question..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="btn-primary w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-heading-2 mb-4">Contact Information</h2>
                <p className="text-body mb-8">
                  Choose the most convenient way to get in touch with us. We're always happy to help and answer any
                  questions you may have.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="card">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-heading-3 mb-1">{item.title}</h3>
                        <p className="font-medium text-foreground mb-1">{item.details}</p>
                        <p className="text-small">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <Card className="card">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-body">Interactive map would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-body">
              Quick answers to questions you may have. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-heading-3">How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Project timelines vary depending on complexity and scope. Simple applications typically take 2-4
                  weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline
                  during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle className="text-heading-3">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Yes! We offer various support packages including bug fixes, security updates, feature enhancements,
                  and performance monitoring. We can discuss the best support plan for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader>
                <CardTitle className="text-heading-3">What technologies do you work with?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, and various
                  databases. We also work with cloud platforms like AWS, Vercel, and provide DevOps services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
