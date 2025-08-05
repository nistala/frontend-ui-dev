"use client"

import { useState } from "react"
import { Upload, AlertCircle, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ExamRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  examDetails: {
    id: number
    name: string
    date: string
    registrationEnd: string
    fee: string
    eligibility: string
    vacancies: number
    category: string
  }
}

export function ExamRegistrationForm({ isOpen, onClose, examDetails }: ExamRegistrationFormProps) {
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
    category: "",

    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Exam Preferences
    examCenter: "",
    preferredLanguage: "",

    // Educational Details
    qualification: "",
    university: "",
    graduationYear: "",
    percentage: "",

    // Documents
    photo: null,
    signature: null,
    certificates: null,

    // Payment
    paymentMethod: "",

    // Declarations
    agreeToTerms: false,
    declarationAccepted: false,
  })

  const examCenters = [
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

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError("Please fill in all required personal details")
      return false
    }

    if (!formData.dateOfBirth || !formData.gender || !formData.category) {
      setError("Please complete your personal information")
      return false
    }

    if (!formData.examCenter || !formData.preferredLanguage) {
      setError("Please select exam center and language preference")
      return false
    }

    if (!formData.qualification) {
      setError("Please provide your educational qualification")
      return false
    }

    if (!formData.agreeToTerms || !formData.declarationAccepted) {
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
      setSuccess("Registration submitted successfully! You will receive a confirmation email shortly.")

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
          category: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          examCenter: "",
          preferredLanguage: "",
          qualification: "",
          university: "",
          graduationYear: "",
          percentage: "",
          photo: null,
          signature: null,
          certificates: null,
          paymentMethod: "",
          agreeToTerms: false,
          declarationAccepted: false,
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
          <DialogTitle className="text-xl">Register for {examDetails.name}</DialogTitle>
          <DialogDescription className="space-y-2">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {examDetails.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Registration ends: {examDetails.registrationEnd}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{examDetails.category}</Badge>
              <Badge variant="outline">{examDetails.vacancies} Vacancies</Badge>
              <Badge className="bg-green-100 text-green-800">{examDetails.fee}</Badge>
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

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
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
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Address Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Complete Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter your complete address"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="City"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    placeholder="State"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange("pincode", e.target.value)}
                    placeholder="PIN Code"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exam Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Exam Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="examCenter">Preferred Exam Center *</Label>
                  <Select value={formData.examCenter} onValueChange={(value) => handleInputChange("examCenter", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam center" />
                    </SelectTrigger>
                    <SelectContent>
                      {examCenters.map((center) => (
                        <SelectItem key={center} value={center.toLowerCase()}>
                          {center}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredLanguage">Preferred Language *</Label>
                  <Select
                    value={formData.preferredLanguage}
                    onValueChange={(value) => handleInputChange("preferredLanguage", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="both">Both English & Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Educational Qualification */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Educational Qualification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Highest Qualification *</Label>
                  <Select
                    value={formData.qualification}
                    onValueChange={(value) => handleInputChange("qualification", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graduation">Graduation</SelectItem>
                      <SelectItem value="postgraduation">Post Graduation</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University/Board</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    placeholder="University or board name"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="graduationYear">Year of Graduation</Label>
                  <Input
                    id="graduationYear"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                    placeholder="2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="percentage">Percentage/CGPA</Label>
                  <Input
                    id="percentage"
                    value={formData.percentage}
                    onChange={(e) => handleInputChange("percentage", e.target.value)}
                    placeholder="75.5 or 8.5"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Document Upload</CardTitle>
              <CardDescription>Please upload clear, scanned copies of required documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>Passport Size Photo *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">JPG/PNG, Max 100KB</p>
                    <Button size="sm" variant="outline">
                      Upload Photo
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Signature *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">JPG/PNG, Max 50KB</p>
                    <Button size="sm" variant="outline">
                      Upload Signature
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Educational Certificates</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground mb-2">PDF, Max 2MB</p>
                    <Button size="sm" variant="outline">
                      Upload Certificates
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">Examination Fee</div>
                  <div className="text-sm text-muted-foreground">
                    {examDetails.category} - {examDetails.name}
                  </div>
                </div>
                <div className="text-xl font-bold text-primary">{examDetails.fee}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleInputChange("paymentMethod", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Payment (Credit/Debit Card, UPI, Net Banking)</SelectItem>
                    <SelectItem value="challan">Bank Challan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Declaration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Declaration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                    I agree to the terms and conditions, examination rules, and understand that providing false
                    information may lead to disqualification.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="declarationAccepted"
                    checked={formData.declarationAccepted}
                    onCheckedChange={(checked) => handleInputChange("declarationAccepted", checked)}
                  />
                  <Label htmlFor="declarationAccepted" className="text-sm leading-relaxed">
                    I declare that all the information provided by me is true and correct to the best of my knowledge
                    and belief.
                  </Label>
                </div>
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
              {isLoading ? "Submitting Registration..." : `Pay ${examDetails.fee} & Register`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
