import type { Metadata } from "next"
import { Code, Cloud, Shield, Zap, Users, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive suite of services designed to accelerate your development process.",
}

const services = [
  {
    icon: Code,
    title: "Application Development",
    description: "Full-stack development services using modern frameworks and best practices.",
    features: ["Next.js & React", "TypeScript", "API Development", "Database Design"],
    price: "Starting at $5,000",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with automated deployment and monitoring.",
    features: ["AWS/Vercel Deployment", "CI/CD Pipelines", "Auto-scaling", "Load Balancing"],
    price: "Starting at $500/month",
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Comprehensive security assessment and implementation of best practices.",
    features: ["Vulnerability Assessment", "Code Review", "Security Implementation", "Compliance"],
    price: "Starting at $2,500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your applications with advanced optimization techniques.",
    features: ["Core Web Vitals", "Bundle Optimization", "Caching Strategies", "CDN Setup"],
    price: "Starting at $1,500",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Upskill your team with modern development practices and technologies.",
    features: ["Workshops", "Code Reviews", "Best Practices", "Mentoring"],
    price: "Starting at $200/hour",
  },
  {
    icon: BarChart,
    title: "Analytics & Monitoring",
    description: "Comprehensive monitoring and analytics setup for your applications.",
    features: ["Performance Monitoring", "Error Tracking", "User Analytics", "Custom Dashboards"],
    price: "Starting at $300/month",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your requirements, goals, and technical constraints.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Create a detailed project plan with timelines, milestones, and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build your solution using modern technologies and best practices.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Comprehensive testing to ensure quality, performance, and security.",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Deploy to production with monitoring and support systems in place.",
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and support to keep your application running smoothly.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-heading-1 mb-6">Professional Development Services</h1>
            <p className="text-body text-xl mb-8">
              From concept to deployment, we provide comprehensive services to help you build, optimize, and scale your
              modern web applications with confidence.
            </p>
            <Button size="lg" className="btn-primary">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Our Services</h2>
            <p className="text-body">
              Choose from our comprehensive suite of services designed to meet your specific needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="card">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-heading-3">{service.title}</CardTitle>
                  <CardDescription className="text-body">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-lg font-semibold text-primary mb-3">{service.price}</div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Our Process</h2>
            <p className="text-body">A proven methodology that ensures successful project delivery every time.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-3 mb-2">{item.title}</h3>
                    <p className="text-body">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading-2 mb-4">Ready to Start Your Project?</h2>
            <p className="text-body mb-8">
              Let's discuss your requirements and create a custom solution that fits your needs and budget.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-primary">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
