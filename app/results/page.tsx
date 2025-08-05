import type { Metadata } from "next"
import { Search, Download, Award, TrendingUp, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Results & Merit Lists",
  description: "Check exam results, merit lists, and track your ranking across competitive examinations.",
}

const recentResults = [
  {
    id: 1,
    examName: "UPSC Civil Services Mains 2023",
    resultDate: "2024-01-15",
    totalCandidates: 850000,
    qualified: 12000,
    cutoffMarks: "105/275",
    status: "Published",
    category: "Central Government",
  },
  {
    id: 2,
    examName: "SSC CGL Tier-1 2023",
    resultDate: "2024-01-20",
    totalCandidates: 1200000,
    qualified: 180000,
    cutoffMarks: "145/200",
    status: "Published",
    category: "Central Government",
  },
  {
    id: 3,
    examName: "IBPS Clerk Prelims 2023",
    resultDate: "2024-01-25",
    totalCandidates: 650000,
    qualified: 95000,
    cutoffMarks: "65/100",
    status: "Published",
    category: "Banking",
  },
  {
    id: 4,
    examName: "Railway Group D 2023",
    resultDate: "2024-01-30",
    totalCandidates: 2800000,
    qualified: 350000,
    cutoffMarks: "88/120",
    status: "Published",
    category: "Railways",
  },
]

const meritLists = [
  {
    id: 1,
    examName: "UPSC Civil Services Final 2023",
    rank: 1,
    candidateName: "Arjun Sharma",
    marks: "875/1750",
    category: "General",
    state: "Delhi",
  },
  {
    id: 2,
    examName: "UPSC Civil Services Final 2023",
    rank: 2,
    candidateName: "Priya Patel",
    marks: "872/1750",
    category: "General",
    state: "Gujarat",
  },
  {
    id: 3,
    examName: "UPSC Civil Services Final 2023",
    rank: 3,
    candidateName: "Sai Kartik Nistala Kumar",
    marks: "869/1750",
    category: "OBC",
    state: "Bihar",
  },
  {
    id: 4,
    examName: "SSC CGL Final 2023",
    rank: 1,
    candidateName: "Sneha Singh",
    marks: "485/600",
    category: "General",
    state: "Uttar Pradesh",
  },
  {
    id: 5,
    examName: "SSC CGL Final 2023",
    rank: 2,
    candidateName: "Amit Verma",
    marks: "482/600",
    category: "General",
    state: "Rajasthan",
  },
]

const personalResults = [
  {
    id: 1,
    examName: "IBPS PO Prelims 2023",
    rollNumber: "1234567890",
    result: "Qualified",
    marks: "78/100",
    rank: 2450,
    cutoff: "65/100",
    nextStage: "Mains Exam",
  },
  {
    id: 2,
    examName: "SSC CGL Tier-1 2023",
    rollNumber: "9876543210",
    result: "Qualified",
    marks: "165/200",
    rank: 1250,
    cutoff: "145/200",
    nextStage: "Tier-2 Exam",
  },
  {
    id: 3,
    examName: "Railway Group D 2023",
    rollNumber: "5555666677",
    result: "Not Qualified",
    marks: "82/120",
    rank: 45000,
    cutoff: "88/120",
    nextStage: "N/A",
  },
]

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Results & Merit Lists</h1>
            <p className="text-xl text-muted-foreground">
              Check your exam results and track rankings across all competitive examinations
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by exam name, roll number, or registration number..."
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Recent Results</TabsTrigger>
              <TabsTrigger value="merit" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">Merit Lists</TabsTrigger>
              <TabsTrigger value="personal" className="rounded-md px-3 py-2 transition
               data-[state=active]:bg-primary 
               data-[state=active]:text-primary-foreground
               data-[state=inactive]:text-balck-foreground
               hover:bg-muted/30 hover:text-foreground">My Results</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Latest Results</h2>
                  <p className="text-muted-foreground">Recently published examination results</p>
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="central">Central Government</SelectItem>
                    <SelectItem value="state">State Government</SelectItem>
                    <SelectItem value="banking">Banking</SelectItem>
                    <SelectItem value="railways">Railways</SelectItem>
                    <SelectItem value="defense">Defense</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {recentResults.map((result) => (
                  <Card key={result.id} className="dashboard-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{result.examName}</CardTitle>
                          <div className="flex items-center space-x-4 mb-3">
                            <Badge variant="secondary">{result.category}</Badge>
                            <Badge className="status-badge status-active">{result.status}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">Result Date</div>
                          <div className="font-medium flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {result.resultDate}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {result.totalCandidates.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Total Appeared</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{result.qualified.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Qualified</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{result.cutoffMarks}</div>
                          <div className="text-sm text-muted-foreground">Cut-off Marks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {((result.qualified / result.totalCandidates) * 100).toFixed(1)}%
                          </div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {result.qualified.toLocaleString()} candidates qualified for next stage
                        </div>
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                          <Button size="sm" className="btn-primary">
                            Check Result
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="merit" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Merit Lists</h2>
                <p className="text-muted-foreground">Top performers in recent competitive examinations</p>
              </div>

              <div className="grid gap-6">
                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-yellow-500" />
                      UPSC Civil Services Final 2023 - Top Rankers
                    </CardTitle>
                    <CardDescription>Final merit list for Civil Services Examination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {meritLists
                        .filter((m) => m.examName.includes("UPSC"))
                        .map((candidate) => (
                          <div key={candidate.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                                {candidate.rank}
                              </div>
                              <div>
                                <div className="font-medium">{candidate.candidateName}</div>
                                <div className="text-sm text-muted-foreground">{candidate.state}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">{candidate.marks}</div>
                              <Badge variant="outline" className="text-xs">
                                {candidate.category}
                              </Badge>
                            </div>
                          </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View Complete Merit List
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dashboard-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-yellow-500" />
                      SSC CGL Final 2023 - Top Rankers
                    </CardTitle>
                    <CardDescription>Final merit list for Combined Graduate Level Examination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {meritLists
                        .filter((m) => m.examName.includes("SSC"))
                        .map((candidate) => (
                          <div key={candidate.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                                {candidate.rank}
                              </div>
                              <div>
                                <div className="font-medium">{candidate.candidateName}</div>
                                <div className="text-sm text-muted-foreground">{candidate.state}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">{candidate.marks}</div>
                              <Badge variant="outline" className="text-xs">
                                {candidate.category}
                              </Badge>
                            </div>
                          </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      View Complete Merit List
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="personal" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">My Results</h2>
                <p className="text-muted-foreground">Your personal examination results and performance</p>
              </div>

              <div className="grid gap-6">
                {personalResults.map((result) => (
                  <Card key={result.id} className="dashboard-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{result.examName}</CardTitle>
                          <CardDescription>Roll Number: {result.rollNumber}</CardDescription>
                        </div>
                        <Badge variant={result.result === "Qualified" ? "default" : "destructive"} className="text-sm">
                          {result.result}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-4 mb-6">
                        <div className="text-center">
                          <div className="text-xl font-bold text-primary">{result.marks}</div>
                          <div className="text-sm text-muted-foreground">Your Marks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-orange-600">{result.cutoff}</div>
                          <div className="text-sm text-muted-foreground">Cut-off</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-600">{result.rank}</div>
                          <div className="text-sm text-muted-foreground">Your Rank</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-foreground mb-1">Next Stage</div>
                          <div className="text-sm text-muted-foreground">{result.nextStage}</div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Scorecard
                        </Button>
                        {result.result === "Qualified" && (
                          <Button size="sm" className="btn-primary">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Next Steps
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
