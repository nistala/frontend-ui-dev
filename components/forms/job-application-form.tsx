"use client"

import { useState } from "react"
import { Upload, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface JobApplicationFormProps {
  isOpen: boolean
  onClose: () => void
  jobDetails: {
    id: number
    title: string
    company: string
    location: string
    salary: string
    deadline: string
    requirements: string[]
  }
}

export function JobApplicationForm({ isOpen, onClose, jobDetails }: JobApplicationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
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
    highestQualification: "",
    university: "",
    graduationYear: "",
    percentage: "",
    totalExperience: "",
    currentCompany: "",
    currentPosition: "",
    relevantExperience: "",
    coverLetter: "",
    expectedSalary: "",
    noticePeriod: "",
    willingToRelocate: false,
    resume: null,
    photo: null,
    certificates: [],
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          setError("Please fill in all required personal details")
          return false
        }
        break
      case 2:
        if (!formData.highestQualification || !formData.university) {
          setError("Please fill in your educational details")
          return false
        }
        break
      case 4:
        if (!formData.resume) {
          setError("Please upload your resume")
          return false
        }
        break
    }
    return true
  }

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSuccess("Application submitted successfully!")

      setTimeout(() => {
        onClose()
        setSuccess("")
        setStep(1)
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
          highestQualification: "",
          university: "",
          graduationYear: "",
          percentage: "",
          totalExperience: "",
          currentCompany: "",
          currentPosition: "",
          relevantExperience: "",
          coverLetter: "",
          expectedSalary: "",
          noticePeriod: "",
          willingToRelocate: false,
          resume: null,
          photo: null,
          certificates: [],
        })
      }, 2000)
    } catch (err) {
      setError("Failed to submit application. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for {jobDetails.title}</DialogTitle>
          <DialogDescription>
            {jobDetails.company} • {jobDetails.location} • {jobDetails.salary}
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNumber <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 4 && <div className={`w-16 h-1 mx-2 ${stepNumber < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name *</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Last Name *</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone *</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Education */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Educational Qualifications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Highest Qualification *</Label>
                  <Input
                    value={formData.highestQualification}
                    onChange={(e) => handleInputChange("highestQualification", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>University *</Label>
                  <Input
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Experience */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Work Experience</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Total Experience</Label>
                  <Input
                    value={formData.totalExperience}
                    onChange={(e) => handleInputChange("totalExperience", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Relevant Experience</Label>
                  <Input
                    value={formData.relevantExperience}
                    onChange={(e) => handleInputChange("relevantExperience", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Document Upload */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Document Upload</h3>
              <Card className="p-4">
                <h4 className="font-medium mb-3">Resume *</h4>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <Button size="sm" variant="outline">
                    Choose File
                  </Button>
                </div>
              </Card>
            </div>
          )}

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
        </div>

        {/* Sticky Footer Navigation */}
        <div className="flex justify-between pt-4 border-t bg-background mt-4 sticky bottom-0">
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {step > 1 && (
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
            )}
          </div>

          {step < 4 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
