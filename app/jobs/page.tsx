"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Calendar, Building, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobApplicationForm } from "@/components/forms/job-application-form"

const jobs = [
  {
    id: 1,
    title: "Assistant Manager (IT)",
    company: "State Bank of India",
    department: "Banking",
    location: "Mumbai, Maharashtra",
    salary: "₹8-12 LPA",
    experience: "2-5 years",
    education: "B.Tech/MCA",
    deadline: "2024-02-28",
    posted: "2024-01-15",
    vacancies: 150,
    type: "Government",
    status: "Active",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2-5 years of experience in IT management",
      "Knowledge of banking systems preferred",
      "Strong leadership and communication skills",
    ],
  },
  {
    id: 2,
    title: "Junior Engineer (Civil)",
    company: "Public Works Department",
    department: "Engineering",
    location: "New Delhi",
    salary: "₹6-9 LPA",
    experience: "0-2 years",
    education: "B.E./B.Tech Civil",
    deadline: "2024-03-15",
    posted: "2024-01-20",
    vacancies: 200,
    type: "Government",
    status: "Active",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "Fresh graduates or up to 2 years experience",
      "Knowledge of AutoCAD and construction practices",
      "Valid engineering license preferred",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Ministry of Statistics",
    department: "Analytics",
    location: "Bangalore, Karnataka",
    salary: "₹7-11 LPA",
    experience: "1-3 years",
    education: "B.Sc/M.Sc Statistics",
    deadline: "2024-03-01",
    posted: "2024-01-18",
    vacancies: 75,
    type: "Private",
    status: "Active",
    requirements: [
      "Bachelor's or Master's degree in Statistics, Mathematics, or related field",
      "1-3 years of experience in data analysis",
      "Proficiency in R, Python, or similar tools",
      "Strong analytical and problem-solving skills",
    ],
  },
]

const departments = [
  "All Departments",
  "Banking",
  "Engineering",
  "Analytics",
  "Education",
  "Revenue",
  "Environment",
  "Healthcare",
  "Defense",
  "Railways",
]

const locations = [
  "All Locations",
  "New Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
]

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const handleApplyNow = (job: any) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
  }

  const handleCloseForm = () => {
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  // Filter jobs by type
  const governmentJobs = jobs.filter((job) => job.type === "Government")
  const privateJobs = jobs.filter((job) => job.type === "Private")

  // Component for rendering job cards
  const JobCards = ({ jobList }: { jobList: typeof jobs }) => (
    <div className="grid gap-6">
      {jobList.map((job) => (
        <Card key={job.id} className="dashboard-card hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                <div className="flex items-center space-x-4 text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.department}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  <Badge variant="outline">{job.vacancies} Vacancies</Badge>
                  <Badge className="status-badge status-active">Active</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary mb-1">{job.salary}</div>
                <div className="text-sm text-muted-foreground">per annum</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <div className="text-sm font-medium text-foreground mb-1">Experience</div>
                <div className="text-sm text-muted-foreground">{job.experience}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground mb-1">Education</div>
                <div className="text-sm text-muted-foreground">{job.education}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground mb-1">Application Deadline</div>
                <div className="text-sm text-red-600 font-medium">{job.deadline}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                Posted on {job.posted}
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  Save Job
                </Button>
                <Button size="sm" className="btn-primary" onClick={() => handleApplyNow(job)}>
                  Apply Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Job Opportunities</h1>
            <p className="text-xl text-muted-foreground">Discover your next career opportunity</p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search jobs, companies, keywords..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept.toLowerCase()}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center mt-4">
              <Button size="lg" className="btn-primary">
                <Search className="mr-2 h-4 w-4" />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results with Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="government">
            <TabsList className="mb-8">
              <TabsTrigger value="government" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Government Jobs ({governmentJobs.length})</TabsTrigger>
              <TabsTrigger value="private" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Private Jobs ({privateJobs.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="government">
              <JobCards jobList={governmentJobs} />
            </TabsContent>
            <TabsContent value="private">
              <JobCards jobList={privateJobs} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm isOpen={showApplicationForm} onClose={handleCloseForm} jobDetails={selectedJob} />
      )}
    </div>
  )
}
