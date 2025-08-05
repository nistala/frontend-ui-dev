"use client"

import { useState } from "react"
import {
  Briefcase,
  BookOpen,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Bell,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const dashboardStats = [
  {
    title: "Applications Submitted",
    value: "12",
    change: "+3 this month",
    icon: Briefcase,
    color: "text-blue-600",
    href: "/candidate/applications",
  },
  {
    title: "Exams Registered",
    value: "5",
    change: "+2 this month",
    icon: BookOpen,
    color: "text-green-600",
    href: "/candidate/exams",
  },
  {
    title: "Interview Calls",
    value: "3",
    change: "+1 this week",
    icon: Users,
    color: "text-purple-600",
    href: "/candidate/interviews",
  },
  {
    title: "Profile Completion",
    value: "85%",
    change: "+15% this week",
    icon: TrendingUp,
    color: "text-orange-600",
    href: "/candidate/profile",
  },
]

const recentApplications = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    company: "Ministry of Electronics & IT",
    appliedDate: "2024-01-20",
    status: "Under Review",
    deadline: "2024-02-15",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    jobTitle: "Data Analyst",
    company: "Indian Railways",
    appliedDate: "2024-01-18",
    status: "Interview Scheduled",
    deadline: "2024-02-20",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    jobTitle: "Civil Engineer",
    company: "Public Works Department",
    appliedDate: "2024-01-15",
    status: "Application Submitted",
    deadline: "2024-02-25",
    statusColor: "bg-gray-100 text-gray-800",
  },
]

const upcomingExams = [
  {
    id: 1,
    name: "UPSC Civil Services Prelims",
    date: "2024-06-15",
    timeLeft: "145 days",
    preparation: 65,
    status: "Registered",
    admitCard: true,
  },
  {
    id: 2,
    name: "SSC CGL Tier-1",
    date: "2024-07-20",
    timeLeft: "180 days",
    preparation: 45,
    status: "Registered",
    admitCard: false,
  },
  {
    id: 3,
    name: "IBPS PO Prelims",
    date: "2024-08-10",
    timeLeft: "201 days",
    preparation: 30,
    status: "Registration Pending",
    admitCard: false,
  },
]

const notifications = [
  {
    id: 1,
    title: "Interview scheduled for Software Engineer position",
    message: "Your interview has been scheduled for tomorrow at 10:00 AM",
    time: "2 hours ago",
    type: "interview",
    read: false,
  },
  {
    id: 2,
    title: "New job matching your profile",
    message: "Data Scientist position at ISRO matches your skills",
    time: "1 day ago",
    type: "job",
    read: false,
  },
  {
    id: 3,
    title: "Exam result published",
    message: "SSC CGL Tier-1 results are now available",
    time: "2 days ago",
    type: "result",
    read: true,
  },
]

const profileCompletion = {
  overall: 85,
  sections: [
    { name: "Personal Information", completed: true, progress: 100 },
    { name: "Educational Details", completed: true, progress: 100 },
    { name: "Work Experience", completed: false, progress: 60 },
    { name: "Skills & Certifications", completed: false, progress: 40 },
    { name: "Documents Upload", completed: true, progress: 100 },
  ],
}

export default function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sai Kartik Nistala!</h1>
          <p className="text-muted-foreground">Here's your career progress and upcoming activities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="dashboard-card cursor-pointer hover:shadow-lg transition-shadow" asChild>
              <Link href={stat.href}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Recent Applications */}
              <Card className="dashboard-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Recent Applications
                  </CardTitle>
                  <CardDescription>Your latest job applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{app.jobTitle}</div>
                        <div className="text-sm text-muted-foreground">{app.company}</div>
                        <div className="text-xs text-muted-foreground">Applied: {app.appliedDate}</div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${app.statusColor} mb-1`}>{app.status}</Badge>
                        <div className="text-xs text-muted-foreground">Due: {app.deadline}</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/candidate/applications">View All Applications</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>Recent updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-200" : ""}`}
                    >
                      <div className="font-medium text-sm">{notification.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{notification.message}</div>
                      <div className="text-xs text-muted-foreground mt-2">{notification.time}</div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Exams */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Exams
                </CardTitle>
                <CardDescription>Exams you're registered for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-sm">{exam.name}</div>
                        <Badge variant={exam.status === "Registered" ? "default" : "outline"}>{exam.status}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{exam.date}</span>
                        <span>{exam.timeLeft} left</span>
                      </div>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-xs">
                          <span>Preparation Progress</span>
                          <span>{exam.preparation}%</span>
                        </div>
                        <Progress value={exam.preparation} className="h-2" />
                      </div>
                      <div className="flex space-x-2">
                        {exam.admitCard && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <FileText className="mr-1 h-3 w-3" />
                            Admit Card
                          </Button>
                        )}
                        <Button size="sm" className="flex-1">
                          <BookOpen className="mr-1 h-3 w-3" />
                          Study
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent" asChild>
                    <Link href="/jobs">
                      <Briefcase className="h-6 w-6 mb-2" />
                      <span className="text-sm">Browse Jobs</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent" asChild>
                    <Link href="/exams">
                      <BookOpen className="h-6 w-6 mb-2" />
                      <span className="text-sm">Take Practice Test</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent" asChild>
                    <Link href="/job-fairs">
                      <Calendar className="h-6 w-6 mb-2" />
                      <span className="text-sm">Job Fairs</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center p-4 h-auto bg-transparent" asChild>
                    <Link href="/results">
                      <Award className="h-6 w-6 mb-2" />
                      <span className="text-sm">Check Results</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to increase job match accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{profileCompletion.overall}%</div>
                    <div className="text-muted-foreground">Overall Completion</div>
                    <Progress value={profileCompletion.overall} className="mt-4 h-3" />
                  </div>

                  <div className="space-y-4">
                    {profileCompletion.sections.map((section, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {section.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                          )}
                          <div>
                            <div className="font-medium">{section.name}</div>
                            <div className="text-sm text-muted-foreground">{section.progress}% complete</div>
                          </div>
                        </div>
                        <Button size="sm" variant={section.completed ? "outline" : "default"}>
                          {section.completed ? "Edit" : "Complete"}
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/candidate/profile/edit">Complete Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
