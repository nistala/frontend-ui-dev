import type { Metadata } from "next"
import ExamsPageClient from "./ExamsPageClient"

export const metadata: Metadata = {
  title: "Government Exams",
  description: "Prepare for government competitive exams with AI-powered study materials and practice tests.",
}

export default function ExamsPage() {
  return <ExamsPageClient />
}
