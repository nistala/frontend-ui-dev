"use client"

import { useState } from "react"
import { ArrowLeft, Download, Eye, Calendar, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const applications = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    company: "Ministry of Electronics & IT",
    department: "IT Department",
    location: "New Delhi",
    appliedDate: "2024-01-20",
    status: "Under Review",
    deadline: "2024-02-15",
    salary: "₹8-12 LPA",
    applicationId: "APP001234",
    statusColor: "bg-yellow-100 text-yellow-800",
    nextStep: "Document Verification",
  },
  {
    id: 2,
    jobTitle: "Data Analyst",
    company: "Indian Railways",
    department: "Analytics",
    location: "Mumbai",
    appliedDate: "2024-01-18",
    status: "Interview Scheduled",
    deadline: "2024-02-20",
    salary: "₹6-10 LPA",
    applicationId: "APP001235",
    statusColor: "bg-blue-100 text-blue-800",
    nextStep: "Technical Interview on 2024-01-25",
  },
  {
    id: 3,
    jobTitle: "Civil Engineer",
    company: "Public Works Department",
    department: "Engineering",
    location: "Bangalore",
    appliedDate: "2024-01-15",
    status: "Application Submitted",
    deadline: "2024-02-25",
    salary: "₹7-11 LPA",
    applicationId: "APP001236",
    statusColor: "bg-gray-100 text-gray-800",
    nextStep: "Awaiting Initial Review",
  },
  {
    id: 4,
    jobTitle: "Assistant Professor",
    company: "University of Delhi",
    department: "Education",
    location: "New Delhi",
    appliedDate: "2024-01-10",
    status: "Shortlisted",
    deadline: "2024-02-25",
    salary: "₹9-15 LPA",
    applicationId: "APP001237",
    statusColor: "bg-green-100 text-green-800",
    nextStep: "Final Interview Pending",
  },
  {
    id: 5,
    jobTitle: "Tax Inspector",
    company: "Income Tax Department",
    department: "Revenue",
    location: "Chennai",
    appliedDate: "2024-01-05",
    status: "Rejected",
    deadline: "2024-03-10",
    salary: "₹5-8 LPA",
    applicationId: "APP001238",
    statusColor: "bg-red-100 text-red-800",
    nextStep: "Application Closed",
  },
]

export default function MyApplicationsPage() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = statusFilter === "all" || app.status.toLowerCase().includes(statusFilter.toLowerCase())
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const getStatusStats = () => {
    return {
      total: applications.length,
      submitted: applications.filter((app) => app.status === "Application Submitted").length,
      underReview: applications.filter((app) => app.status === "Under Review").length,
      shortlisted: applications.filter((app) => app.status === "Shortlisted").length,
      interviewed: applications.filter((app) => app.status === "Interview Scheduled").length,
      rejected: applications.filter((app) => app.status === "Rejected").length,
    }
  }

  const stats = getStatusStats()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/candidate/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Applications</h1>
          <p className="text-muted-foreground">Track all your job applications and their current status</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-6 mb-8">
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </CardContent>
          </Card>
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-gray-600">{stats.submitted}</div>
              <div className="text-sm text-muted-foreground">Submitted</div>
            </CardContent>
          </Card>
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-yellow-600">{stats.underReview}</div>
              <div className="text-sm text-muted-foreground">Under Review</div>
            </CardContent>
          </Card>
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-600">{stats.shortlisted}</div>
              <div className="text-sm text-muted-foreground">Shortlisted</div>
            </CardContent>
          </Card>
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-blue-600">{stats.interviewed}</div>
              <div className="text-sm text-muted-foreground">Interviewed</div>
            </CardContent>
          </Card>
          <Card className="dashboard-card text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <div className="text-sm text-muted-foreground">Rejected</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="dashboard-card mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by job title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="submitted">Application Submitted</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview">Interview Scheduled</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <Card key={application.id} className="dashboard-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{application.jobTitle}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-1" />
                          {application.company}
                          <span className="mx-2">•</span>
                          {application.department}
                        </div>
                        <div className="flex items-center text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {application.location}
                        </div>
                      </div>
                      <Badge className={application.statusColor}>{application.status}</Badge>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4 mb-4">
                      <div>
                        <div className="text-sm font-medium text-foreground">Application ID</div>
                        <div className="text-sm text-muted-foreground">{application.applicationId}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Applied Date</div>
                        <div className="text-sm text-muted-foreground">{application.appliedDate}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Deadline</div>
                        <div className="text-sm text-muted-foreground">{application.deadline}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Salary</div>
                        <div className="text-sm text-primary font-medium">{application.salary}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-foreground mb-1">Next Step</div>
                      <div className="text-sm text-muted-foreground">{application.nextStep}</div>
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Application
                      </Button>
                      {application.status === "Interview Scheduled" && (
                        <Button size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          Interview Details
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <Card className="dashboard-card text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">No applications found matching your criteria</div>
              <Button asChild>
                <Link href="/jobs">Browse Available Jobs</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
