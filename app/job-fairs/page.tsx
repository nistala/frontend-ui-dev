import type { Metadata } from "next"
import JobFairsClientPage from "./JobFairsClientPage"

export const metadata: Metadata = {
  title: "Job Fairs",
  description: "Connect with top employers at virtual and physical job fairs nationwide.",
}

export default function JobFairsPage() {
  return <JobFairsClientPage />
}
