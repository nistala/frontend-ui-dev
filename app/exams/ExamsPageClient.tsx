"use client"

import { Search, Calendar, Users, BookOpen, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExamRegistrationForm } from "@/components/forms/exam-registration-form"
import { useState } from "react"

const upcomingExams = [
  {
    id: 1,
    name: "UPSC Civil Services Preliminary",
    category: "Central Government",
    date: "2024-06-15",
    registrationEnd: "2024-03-15",
    fee: "₹100",
    eligibility: "Graduate",
    vacancies: 1000,
    registrations: "2.1M",
    status: "Registration Open",
    difficulty: "High",
  },
  {
    id: 2,
    name: "SSC Combined Graduate Level",
    category: "Central Government",
    date: "2024-07-20",
    registrationEnd: "2024-04-20",
    fee: "₹100",
    eligibility: "Graduate",
    vacancies: 8000,
    registrations: "1.8M",
    status: "Registration Open",
    difficulty: "Medium",
  },
  {
    id: 3,
    name: "IBPS PO",
    category: "Banking",
    date: "2024-08-10",
    registrationEnd: "2024-05-10",
    fee: "₹850",
    eligibility: "Graduate",
    vacancies: 4000,
    registrations: "950K",
    status: "Registration Open",
    difficulty: "Medium",
  },
  {
    id: 4,
    name: "Railway Group D",
    category: "Railways",
    date: "2024-09-05",
    registrationEnd: "2024-06-05",
    fee: "₹500",
    eligibility: "10th Pass",
    vacancies: 50000,
    registrations: "3.2M",
    status: "Registration Open",
    difficulty: "Low",
  },
]

const examResults = [
  {
    id: 1,
    name: "UPSC Civil Services Mains 2023",
    resultDate: "2024-01-15",
    qualified: 12000,
    totalAppeared: 850000,
    cutoff: "105/275",
    status: "Published",
  },
  {
    id: 2,
    name: "SSC CGL Tier-1 2023",
    resultDate: "2024-01-20",
    qualified: 180000,
    totalAppeared: 1200000,
    cutoff: "145/200",
    status: "Published",
  },
  {
    id: 3,
    name: "IBPS Clerk Prelims 2023",
    resultDate: "2024-01-25",
    qualified: 95000,
    totalAppeared: 650000,
    cutoff: "65/100",
    status: "Published",
  },
]

const categories = [
  "All Categories",
  "Central Government",
  "State Government",
  "Banking",
  "Railways",
  "Defense",
  "Teaching",
  "Medical",
  "Engineering",
]

export default function ExamsPageClient() {
  const [selectedExam, setSelectedExam] = useState<any>(null)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const handleRegisterNow = (exam: any) => {
    setSelectedExam(exam)
    setShowRegistrationForm(true)
  }

  const handleCloseForm = () => {
    setShowRegistrationForm(false)
    setSelectedExam(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Competitive Exams</h1>
            <p className="text-xl text-muted-foreground">Prepare, practice, and excel in government examinations</p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search exams by name, category, or organization..." className="pl-10 h-12 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Upcoming Exams</TabsTrigger>
              <TabsTrigger value="results" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Results</TabsTrigger>
              <TabsTrigger value="practice" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Practice Tests</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Upcoming Examinations</h2>
                  <p className="text-muted-foreground">Don't miss important registration deadlines</p>
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {upcomingExams.map((exam) => (
                  <Card key={exam.id} className="dashboard-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{exam.name}</CardTitle>
                          <div className="flex items-center space-x-4 mb-3">
                            <Badge variant="secondary">{exam.category}</Badge>
                            <Badge
                              variant="outline"
                              className={
                                exam.difficulty === "High"
                                  ? "border-red-500 text-red-700"
                                  : exam.difficulty === "Medium"
                                    ? "border-yellow-500 text-yellow-700"
                                    : "border-green-500 text-green-700"
                              }
                            >
                              {exam.difficulty} Level
                            </Badge>
                            <Badge className="status-badge status-active">{exam.status}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary mb-1">{exam.vacancies}</div>
                          <div className="text-sm text-muted-foreground">Vacancies</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-4 mb-6">
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Exam Date</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exam.date}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Registration Ends</div>
                          <div className="text-sm text-red-600 font-medium">{exam.registrationEnd}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Application Fee</div>
                          <div className="text-sm text-muted-foreground">{exam.fee}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Eligibility</div>
                          <div className="text-sm text-muted-foreground">{exam.eligibility}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {exam.registrations} registered
                        </div>
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Syllabus
                          </Button>
                          <Button size="sm" className="btn-primary" onClick={() => handleRegisterNow(exam)}>
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Recent Results</h2>
                <p className="text-muted-foreground">Latest examination results and merit lists</p>
              </div>

              <div className="grid gap-6">
                {examResults.map((result) => (
                  <Card key={result.id} className="dashboard-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{result.name}</CardTitle>
                          <Badge className="status-badge status-active">{result.status}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">Result Date</div>
                          <div className="font-medium">{result.resultDate}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-3 mb-6">
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Qualified</div>
                          <div className="text-lg font-bold text-green-600">{result.qualified.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Total Appeared</div>
                          <div className="text-lg font-bold text-muted-foreground">
                            {result.totalAppeared.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground mb-1">Cut-off Marks</div>
                          <div className="text-lg font-bold text-primary">{result.cutoff}</div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Award className="mr-2 h-4 w-4" />
                          Merit List
                        </Button>
                        <Button size="sm" className="btn-primary">
                          Check Result
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="practice" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">AI-Powered Practice Tests</h2>
                <p className="text-muted-foreground">Personalized practice sessions based on your performance</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingExams.slice(0, 6).map((exam) => (
                  <Card key={exam.id} className="dashboard-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{exam.name}</CardTitle>
                      <CardDescription>Practice Test Series</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tests Available:</span>
                        <span className="font-medium">25</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">2-3 hours</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge variant="outline" className="text-xs">
                          {exam.difficulty}
                        </Badge>
                      </div>
                      <Button className="w-full" size="sm">
                        <Clock className="mr-2 h-4 w-4" />
                        Start Practice
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Exam Registration Form Modal */}
      {selectedExam && (
        <ExamRegistrationForm isOpen={showRegistrationForm} onClose={handleCloseForm} examDetails={selectedExam} />
      )}
    </div>
  )
}
