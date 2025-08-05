import type { Metadata } from "next"
import { Users, Target, Award, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our mission, values, and the team behind ModernApp.",
}

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are committed to empowering developers with the best tools and practices to build exceptional applications.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our success is measured by the success of our community. We prioritize user feedback and collaboration.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to user experience.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building solutions that make a positive impact on developers and businesses worldwide.",
  },
]

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Co-founder",
    bio: "Former engineering lead at major tech companies with 15+ years of experience building scalable applications.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Kim",
    role: "CTO & Co-founder",
    bio: "Full-stack architect passionate about developer experience and modern web technologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Product strategist with a track record of launching successful developer tools and platforms.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-heading-1 mb-6">About ModernApp</h1>
            <p className="text-body text-xl mb-8">
              We're on a mission to revolutionize how developers build and deploy modern web applications. Our platform
              combines cutting-edge technology with developer-first principles to create tools that developers actually
              love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  ModernApp was born out of frustration with the complexity of modern web development. As developers
                  ourselves, we experienced firsthand the challenges of setting up production-ready applications with
                  proper architecture, security, and scalability.
                </p>
                <p>
                  In 2023, we decided to build the platform we wished existed – one that provides all the tools and best
                  practices needed to build modern applications without the usual complexity and setup time.
                </p>
                <p>
                  Today, ModernApp powers thousands of applications worldwide, helping developers focus on what they do
                  best: building amazing user experiences.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our team working together"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Our Values</h2>
            <p className="text-body">The principles that guide everything we do and every decision we make.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-heading-3">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-heading-2 mb-4">Meet Our Team</h2>
            <p className="text-body">
              The passionate individuals behind ModernApp who are dedicated to making development better for everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="card text-center">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="mx-auto h-32 w-32 rounded-full object-cover mb-4"
                  />
                  <CardTitle className="text-heading-3">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body">{member.bio}</p>
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
            <h2 className="text-heading-2 mb-4">By the Numbers</h2>
            <p className="text-body">Our impact on the developer community continues to grow every day.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-body">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-body">Applications Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-body">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-body">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
