"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Upload, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

const steps = [
  { id: 1, title: "Personal Information", description: "Basic details and contact information" },
  { id: 2, title: "Educational Details", description: "Academic qualifications and certifications" },
  { id: 3, title: "Work Experience", description: "Professional experience and skills" },
  { id: 4, title: "Documents Upload", description: "Upload required documents and certificates" },
]

export default function ProfileEditPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Sai Kartik ",
    lastName: "Nistala",
    email: "snistala@miracle.com",
    phone: "+91 9876543210",
    dateOfBirth: "1995-06-15",
    gender: "male",
    category: "general",
    aadhaar: "",
    pan: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "single",
  })

  // Education Details
  const [education, setEducation] = useState([
    {
      id: 1,
      level: "graduation",
      institution: "Delhi University",
      course: "B.Tech Computer Science",
      year: "2017",
      percentage: "75.5",
      board: "Delhi University",
    },
    {
      id: 2,
      level: "intermediate",
      institution: "ABC School",
      course: "Science (PCM)",
      year: "2013",
      percentage: "85.2",
      board: "CBSE",
    },
  ])

  // Work Experience
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Tech Solutions Pvt Ltd",
      position: "Software Developer",
      startDate: "2017-07",
      endDate: "2020-12",
      current: false,
      description: "Developed web applications using React and Node.js",
    },
  ])

  // Skills
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "Python", "SQL"])
  const [newSkill, setNewSkill] = useState("")

  // Documents
  const [documents, setDocuments] = useState({
    resume: null,
    photo: null,
    aadhaar: null,
    pan: null,
    certificates: [],
  })

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }))
  }

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      level: "",
      institution: "",
      course: "",
      year: "",
      percentage: "",
      board: "",
    }
    setEducation((prev) => [...prev, newEdu])
  }

  const updateEducation = (id: number, field: string, value: string) => {
    setEducation((prev) => prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const removeEducation = (id: number) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id))
  }

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setExperience((prev) => [...prev, newExp])
  }

  const updateExperience = (id: number, field: string, value: string | boolean) => {
    setExperience((prev) => prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id: number) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== id))
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills((prev) => [...prev, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSave = async () => {
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSuccess("Profile updated successfully!")
    } catch (err) {
      setError("Failed to update profile. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Profile</h1>
          <p className="text-muted-foreground">Fill in your details to improve job matching accuracy</p>
        </div>

        {/* Progress */}
        <Card className="dashboard-card mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`p-3 rounded-lg border ${
                    step.id === currentStep
                      ? "border-primary bg-primary/5"
                      : step.id < currentStep
                        ? "border-green-500 bg-green-50"
                        : "border-border"
                  }`}
                >
                  <div className="font-medium text-sm">{step.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={personalInfo.firstName}
                      onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={personalInfo.lastName}
                      onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={personalInfo.dateOfBirth}
                      onChange={(e) => handlePersonalInfoChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select
                      value={personalInfo.gender}
                      onValueChange={(value) => handlePersonalInfoChange("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={personalInfo.category}
                      onValueChange={(value) => handlePersonalInfoChange("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                        <SelectItem value="ews">EWS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input
                      id="aadhaar"
                      placeholder="1234 5678 9012"
                      value={personalInfo.aadhaar}
                      onChange={(e) => handlePersonalInfoChange("aadhaar", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input
                      id="pan"
                      placeholder="ABCDE1234F"
                      value={personalInfo.pan}
                      onChange={(e) => handlePersonalInfoChange("pan", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    value={personalInfo.address}
                    onChange={(e) => handlePersonalInfoChange("address", e.target.value)}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={personalInfo.city}
                      onChange={(e) => handlePersonalInfoChange("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select
                      value={personalInfo.state}
                      onValueChange={(value) => handlePersonalInfoChange("state", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      value={personalInfo.pincode}
                      onChange={(e) => handlePersonalInfoChange("pincode", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Educational Qualifications</h3>
                  <Button onClick={addEducation} size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </div>

                {education.map((edu, index) => (
                  <Card key={edu.id} className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Education #{index + 1}</h4>
                      {education.length > 1 && (
                        <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Education Level *</Label>
                        <Select value={edu.level} onValueChange={(value) => updateEducation(edu.id, "level", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssc">SSC/10th</SelectItem>
                            <SelectItem value="intermediate">Intermediate/12th</SelectItem>
                            <SelectItem value="graduation">Graduation</SelectItem>
                            <SelectItem value="postgraduation">Post Graduation</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Institution/School *</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          placeholder="Institution name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                      <div className="space-y-2">
                        <Label>Course/Stream *</Label>
                        <Input
                          value={edu.course}
                          onChange={(e) => updateEducation(edu.id, "course", e.target.value)}
                          placeholder="Course or stream"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Board/University *</Label>
                        <Input
                          value={edu.board}
                          onChange={(e) => updateEducation(edu.id, "board", e.target.value)}
                          placeholder="Board or university"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                      <div className="space-y-2">
                        <Label>Year of Passing *</Label>
                        <Input
                          value={edu.year}
                          onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                          placeholder="2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Percentage/CGPA *</Label>
                        <Input
                          value={edu.percentage}
                          onChange={(e) => updateEducation(edu.id, "percentage", e.target.value)}
                          placeholder="75.5 or 8.5"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Work Experience */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Work Experience</h3>
                    <Button onClick={addExperience} size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Experience
                    </Button>
                  </div>

                  {experience.map((exp, index) => (
                    <Card key={exp.id} className="p-4 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Experience #{index + 1}</h4>
                        <Button variant="ghost" size="sm" onClick={() => removeExperience(exp.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Company Name *</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                            placeholder="Company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Position *</Label>
                          <Input
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                            placeholder="Job title"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2 mt-4">
                        <div className="space-y-2">
                          <Label>Start Date *</Label>
                          <Input
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>End Date</Label>
                          <Input
                            type="month"
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                            disabled={exp.current}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label>Job Description</Label>
                        <Textarea
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                          placeholder="Describe your responsibilities and achievements"
                          className="mt-2"
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-auto p-0"
                          onClick={() => removeSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill"
                      onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    />
                    <Button onClick={addSkill}>Add</Button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-4">
                    <h4 className="font-medium mb-3">Resume *</h4>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload your resume (PDF, DOC, DOCX)</p>
                      <Button size="sm">Choose File</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-3">Profile Photo *</h4>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload your photo (JPG, PNG)</p>
                      <Button size="sm">Choose File</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-3">Aadhaar Card</h4>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload Aadhaar card (PDF, JPG, PNG)</p>
                      <Button size="sm">Choose File</Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-3">PAN Card</h4>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload PAN card (PDF, JPG, PNG)</p>
                      <Button size="sm">Choose File</Button>
                    </div>
                  </Card>
                </div>

                <Card className="p-4">
                  <h4 className="font-medium mb-3">Educational Certificates</h4>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload educational certificates (Multiple files allowed)
                    </p>
                    <Button size="sm">Choose Files</Button>
                  </div>
                </Card>
              </div>
            )}

            {error && (
              <Alert className="border-red-200 bg-red-50 text-red-800">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50 text-green-800">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Profile"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
