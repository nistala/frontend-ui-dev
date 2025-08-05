import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects and applications we've built for clients.",
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "E-commerce",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "A comprehensive SaaS application with user management, subscription billing, and detailed analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Material-UI"],
    category: "SaaS",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare Portal",
    description:
      "A secure healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "WebRTC"],
    category: "Healthcare",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Trading App",
    description: "Real-time trading platform with advanced charting, portfolio management, and risk analysis tools.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "WebSocket", "D3.js", "Redis", "Express.js"],
    category: "Finance",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with course management, video streaming, progress tracking, and interactive assessments.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    category: "Education",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with advanced search, virtual tours, and CRM integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox", "Cloudinary"],
    category: "Real Estate",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "E-commerce", "SaaS", "Healthcare", "Finance", "Education", "Real Estate"]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-heading-1 mb-6">Our Portfolio</h1>
            <p className="text-body text-xl mb-8">
              Explore our collection of successful projects across various industries. Each project showcases our
              commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="card group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-heading-3">{project.title}</CardTitle>
                  <CardDescription className="text-body">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Project Success Metrics</h2>
            <p className="text-body">
              Our track record speaks for itself. Here are some key metrics from our completed projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-body">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-body">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-body">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-body">Average Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading-2 mb-4">Ready to Start Your Project?</h2>
            <p className="text-body mb-8">
              Let's work together to bring your vision to life. Contact us today to discuss your project requirements
              and get a custom quote.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-primary">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
