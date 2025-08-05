"use client"

import { useState } from "react"
import {
  Briefcase,
  Users,
  Calendar,
  TrendingUp,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const dashboardStats = [
  {
    title: "Active Job Postings",
    value: "8",
    change: "+2 this month",
    icon: Briefcase,
    color: "text-blue-600",
  },
  {
    title: "Applications Received",
    value: "156",
    change: "+23 this week",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Interviews Scheduled",
    value: "12",
    change: "+5 this week",
    icon: Calendar,
    color: "text-purple-600",
  },
  {
    title: "Hiring Success Rate",
    value: "68%",
    change: "+8% improvement",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

const jobPostings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "IT Department",
    location: "New Delhi",
    postedDate: "2024-01-15",
    applications: 45,
    status: "Active",
    deadline: "2024-02-15",
    salary: "₹12-18 LPA",
  },
  {
    id: 2,
    title: "Data Analyst",
    department: "Analytics",
    location: "Mumbai",
    postedDate: "2024-01-20",
    applications: 32,
    status: "Active",
    deadline: "2024-02-20",
    salary: "₹8-12 LPA",
  },
  {
    id: 3,
    title: "Civil Engineer",
    department: "Infrastructure",
    location: "Bangalore",
    postedDate: "2024-01-10",
    applications: 78,
    status: "Closed",
    deadline: "2024-02-10",
    salary: "₹10-15 LPA",
  },
]

const recentApplications = [
  {
    id: 1,
    candidateName: "Sai Kartik Nistala Kumar",
    position: "Senior Software Engineer",
    appliedDate: "2024-01-22",
    experience: "5 years",
    status: "Under Review",
    score: 85,
    resumeUrl: "#",
  },
  {
    id: 2,
    candidateName: "Priya Sharma",
    position: "Data Analyst",
    appliedDate: "2024-01-21",
    experience: "3 years",
    status: "Interview Scheduled",
    score: 92,
    resumeUrl: "#",
  },
  {
    id: 3,
    candidateName: "Amit Singh",
    position: "Civil Engineer",
    appliedDate: "2024-01-20",
    experience: "4 years",
    status: "Shortlisted",
    score: 78,
    resumeUrl: "#",
  },
]

const upcomingInterviews = [
  {
    id: 1,
    candidateName: "Priya Sharma",
    position: "Data Analyst",
    date: "2024-01-25",
    time: "10:00 AM",
    type: "Technical",
    interviewer: "John Doe",
  },
  {
    id: 2,
    candidateName: "Vikash Patel",
    position: "Senior Software Engineer",
    date: "2024-01-25",
    time: "2:00 PM",
    type: "HR Round",
    interviewer: "Sarah Wilson",
  },
  {
    id: 3,
    candidateName: "Neha Gupta",
    position: "Civil Engineer",
    date: "2024-01-26",
    time: "11:00 AM",
    type: "Technical",
    interviewer: "Mike Johnson",
  },
]

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Closed":
        return "bg-gray-100 text-gray-800"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800"
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800"
      case "Shortlisted":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Employer Dashboard</h1>
          <p className="text-muted-foreground">Manage your job postings and candidate applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="dashboard-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Applications */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Recent Applications
                  </CardTitle>
                  <CardDescription>Latest candidate applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{app.candidateName}</div>
                        <div className="text-sm text-muted-foreground">{app.position}</div>
                        <div className="text-xs text-muted-foreground">
                          Applied: {app.appliedDate} • {app.experience} experience
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                        <div className="text-xs text-muted-foreground">Score: {app.score}%</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Applications
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Interviews */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Interviews
                  </CardTitle>
                  <CardDescription>Scheduled interviews this week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{interview.candidateName}</div>
                        <Badge variant="outline">{interview.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">{interview.position}</div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {interview.date} at {interview.time}
                        </span>
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Interviews
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent" asChild>
                    <Link href="/employer/jobs/new">
                      <Plus className="h-6 w-6 mb-2" />
                      <span className="text-sm">Post New Job</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent">
                    <Users className="h-6 w-6 mb-2" />
                    <span className="text-sm">Browse Candidates</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span className="text-sm">Schedule Interview</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent">
                    <MessageSquare className="h-6 w-6 mb-2" />
                    <span className="text-sm">Job Fair Registration</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Job Postings</h2>
                <p className="text-muted-foreground">Manage your active and closed job postings</p>
              </div>
              <Button asChild>
                <Link href="/employer/jobs/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Post New Job
                </Link>
              </Button>
            </div>

            <Card className="dashboard-card">
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  {jobPostings.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-lg">{job.title}</div>
                        <div className="text-muted-foreground">
                          {job.department} • {job.location}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Posted: {job.postedDate} • Deadline: {job.deadline}
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                        <div className="text-sm text-muted-foreground">{job.applications} applications</div>
                        <div className="text-sm font-medium">{job.salary}</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button size="sm">Edit</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Applications Received</h2>
                <p className="text-muted-foreground">Review and manage candidate applications</p>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview-scheduled">Interview Scheduled</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="dashboard-card">
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-lg">{app.candidateName}</div>
                        <div className="text-muted-foreground">{app.position}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Applied: {app.appliedDate} • Experience: {app.experience}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Match Score: <span className="font-medium text-primary">{app.score}%</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Download Resume
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="mr-1 h-3 w-3" />
                            Interview
                          </Button>
                          <Select>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Action" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="shortlist">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                                Shortlist
                              </SelectItem>
                              <SelectItem value="reject">
                                <XCircle className="mr-2 h-4 w-4 text-red-600" />
                                Reject
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Interview Management</h2>
              <p className="text-muted-foreground">Schedule and manage candidate interviews</p>
            </div>

            <Card className="dashboard-card">
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  {upcomingInterviews.map((interview) => (
                    <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-lg">{interview.candidateName}</div>
                        <div className="text-muted-foreground">{interview.position}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <Clock className="inline mr-1 h-3 w-3" />
                          {interview.date} at {interview.time}
                        </div>
                        <div className="text-sm text-muted-foreground">Interviewer: {interview.interviewer}</div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant="outline">{interview.type}</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button size="sm">Join Interview</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
