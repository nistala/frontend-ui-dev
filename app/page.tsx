import { useState } from "react";
import { ArrowRight, Users, BookOpen, Calendar, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


const recentJobs = [
  {
    title: "UPSC Civil Services Examination",
    company: "Union Public Service Commission",
    location: "Pan India",
    type: "Government",
    salary: "₹56,100 - ₹2,50,000 /mon",
    deadline: "2025-02-15",
  },
  {
    title: "SSC Combined Graduate Level (CGL)",
    company: "Staff Selection Commission",
    location: "Pan India",
    type: "Government",
    salary: "₹35,400 - ₹1,12,400 /mon",
    deadline: "2025-01-31",
  },
  {
    title: "IBPS Probationary Officer (PO)",
    company: "Institute of Banking Personnel Selection",
    location: "Pan India",
    type: "Government",
    salary: "₹52,000 - ₹55,000 /mon",
    deadline: "2025-08-10",
  },
  {
    title: "Indian Railways RRB NTPC",
    company: "Indian Railways",
    location: "Pan India",
    type: "Government",
    salary: "₹19,900 - ₹35,400 /mon",
    deadline: "2025-09-30",
  },
  {
    title: "ISRO Scientist/Engineer",
    company: "Indian Space Research Organisation",
    location: "Bengaluru, Karnataka",
    type: "Government",
    salary: "₹56,100 /mon",
    deadline: "2025-04-15",
  },
  {
    title: "State Bank of India PO",
    company: "State Bank of India",
    location: "Pan India",
    type: "Government",
    salary: "₹41,960 /mon",
    deadline: "2025-07-20",
  },
  {
    title: "LIC Assistant Administrative Officer (AAO)",
    company: "Life Insurance Corporation of India",
    location: "Pan India",
    type: "Government",
    salary: "₹53,600 /mon",
    deadline: "2025-05-30",
  },
]

const upcomingExams = [
  {
    name: "UPSC Civil Services",
    date: "2024-03-15",
    registrations: "2.1M",
    category: "Central Government",
  },
  {
    name: "SSC CGL",
    date: "2024-03-20",
    registrations: "1.8M",
    category: "Central Government",
  },
  {
    name: "Banking PO",
    date: "2024-03-25",
    registrations: "950K",
    category: "Banking",
  },
]

export default function HomePage() {
    const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 3
  const totalPages = Math.ceil(recentJobs.length / jobsPerPage)
  const startIndex = (currentPage - 1) * jobsPerPage
  const currentJobs = recentJobs.slice(startIndex, startIndex + jobsPerPage)
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Opportunities
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-lg mx-auto">
             Prepare for exams, apply for jobs, and track your progress all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-primary" asChild>
                <Link href="/register">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/exams">Browse Exams</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-4 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="metric-value">{stat.value}</div>
                <div className="metric-label text-primary font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Everything you need for your career</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools and resources to help you succeed in government job applications and competitive
              exams.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="dashboard-card group cursor-pointer" asChild>
                <Link href={feature.href}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Recent Jobs Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Latest Job Openings</h2>
              <p className="text-muted-foreground">Fresh opportunities from government organizations</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/jobs">View All Jobs</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentJobs.map((job, index) => (
              <Card key={index} className="dashboard-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                      <CardDescription className="font-medium text-foreground">{job.company}</CardDescription>
                    </div>
                    <Badge variant="secondary"  className={job.type === "Government" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-ring-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ring-foreground">Due: {job.deadline}</span>
                    <span className="font-semibold text-primary">{job.salary}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Exams Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Exams</h2>
              <p className="text-muted-foreground">Don't miss important examination dates</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/exams">View All Exams</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {upcomingExams.map((exam, index) => (
              <Card key={index} className="dashboard-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{exam.name}</CardTitle>
                      <Badge variant="outline">{exam.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exam Date:</span>
                    <span className="font-medium">{exam.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Registrations:</span>
                    <span className="font-medium text-primary">{exam.registrations}</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground" size="sm" variant="outline">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
