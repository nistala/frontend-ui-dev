"use client"

import { useState } from "react"
import { Upload, AlertCircle, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface JobFairRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  fairDetails: {
    id: number
    name: string
    date: string
    time: string
    type: string
    location: string
    participants: number
    expectedVisitors: string
    registrationFee: string
  }
}

export function JobFairRegistrationForm({ isOpen, onClose, fairDetails }: JobFairRegistrationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Professional Details
    currentStatus: "",
    experience: "",
    currentCompany: "",
    currentPosition: "",
    industry: "",
    skills: "",

    // Preferences
    interestedRoles: [],
    preferredLocations: [],
    expectedSalary: "",

    // Documents
    resume: null,

    // Additional Info
    aboutYourself: "",
    expectations: "",

    // Declarations
    agreeToTerms: false,
  })

  const jobRoles = [
    "Software Engineer",
    "Data Analyst",
    "Civil Engineer",
    "Mechanical Engineer",
    "HR Manager",
    "Marketing Executive",
    "Finance Manager",
    "Operations Manager",
    "Business Analyst",
    "Project Manager",
    "Sales Executive",
    "Customer Support",
  ]

  const locations = [
    "New Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleRoleToggle = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      interestedRoles: prev.interestedRoles.includes(role)
        ? prev.interestedRoles.filter((r) => r !== role)
        : [...prev.interestedRoles, role],
    }))
  }

  const handleLocationToggle = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredLocations: prev.preferredLocations.includes(location)
        ? prev.preferredLocations.filter((l) => l !== location)
        : [...prev.preferredLocations, location],
    }))
  }

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError("Please fill in all required personal details")
      return false
    }

    if (!formData.currentStatus) {
      setError("Please select your current status")
      return false
    }

    if (formData.interestedRoles.length === 0) {
      setError("Please select at least one interested role")
      return false
    }

    if (!formData.agreeToTerms) {
      setError("Please accept the terms and conditions")
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSuccess("Registration successful! You will receive a confirmation email with event details.")

      setTimeout(() => {
        onClose()
        setSuccess("")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          currentStatus: "",
          experience: "",
          currentCompany: "",
          currentPosition: "",
          industry: "",
          skills: "",
          interestedRoles: [],
          preferredLocations: [],
          expectedSalary: "",
          resume: null,
          aboutYourself: "",
          expectations: "",
          agreeToTerms: false,
        })
      }, 2000)
    } catch (err) {
      setError("Failed to submit registration. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Register for {fairDetails.name}</DialogTitle>
          <DialogDescription className="space-y-2">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {fairDetails.date} at {fairDetails.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {fairDetails.location}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={fairDetails.type === "Virtual" ? "secondary" : "default"}>{fairDetails.type}</Badge>
              <Badge variant="outline">{fairDetails.participants} Employers</Badge>
              <Badge className="bg-green-100 text-green-800">{fairDetails.registrationFee}</Badge>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentStatus">Current Status *</Label>
                  <Select
                    value={formData.currentStatus}
                    onValueChange={(value) => handleInputChange("currentStatus", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="fresher">Fresher</SelectItem>
                      <SelectItem value="employed">Currently Employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Total Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Fresher (0 years)</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentCompany">Current Company</Label>
                  <Input
                    id="currentCompany"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                    placeholder="Company name (if employed)"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentPosition">Current Position</Label>
                  <Input
                    id="currentPosition"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                    placeholder="Your current job title"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="banking">Banking & Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedSalary">Expected Salary</Label>
                  <Input
                    id="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                    placeholder="₹5-8 LPA"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  placeholder="List your key skills (e.g., JavaScript, Project Management, Data Analysis)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Job Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Interested Job Roles * (Select multiple)</Label>
                <div className="grid gap-2 md:grid-cols-3">
                  {jobRoles.map((role) => (
                    <div key={role} className="flex items-center space-x-2">
                      <Checkbox
                        id={`role-${role}`}
                        checked={formData.interestedRoles.includes(role)}
                        onCheckedChange={() => handleRoleToggle(role)}
                      />
                      <Label htmlFor={`role-${role}`} className="text-sm">
                        {role}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Preferred Work Locations (Select multiple)</Label>
                <div className="grid gap-2 md:grid-cols-5">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox
                        id={`location-${location}`}
                        checked={formData.preferredLocations.includes(location)}
                        onCheckedChange={() => handleLocationToggle(location)}
                      />
                      <Label htmlFor={`location-${location}`} className="text-sm">
                        {location}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resume Upload</CardTitle>
              <CardDescription>Upload your latest resume to share with employers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Upload your resume (PDF, DOC, DOCX)</p>
                <p className="text-xs text-muted-foreground mb-3">Max size: 5MB</p>
                <Button size="sm" variant="outline">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutYourself">About Yourself</Label>
                <Textarea
                  id="aboutYourself"
                  value={formData.aboutYourself}
                  onChange={(e) => handleInputChange("aboutYourself", e.target.value)}
                  placeholder="Brief introduction about yourself, your background, and career goals"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectations">What do you expect from this job fair?</Label>
                <Textarea
                  id="expectations"
                  value={formData.expectations}
                  onChange={(e) => handleInputChange("expectations", e.target.value)}
                  placeholder="What are you hoping to achieve by attending this job fair?"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Declaration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                  I agree to the terms and conditions of the job fair. I understand that my information will be shared
                  with participating employers and I consent to being contacted by them regarding job opportunities.
                </Label>
              </div>
            </CardContent>
          </Card>

          {error && (
            <Alert className="border-red-200 bg-red-50 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Registering..." : `Register for Job Fair`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
