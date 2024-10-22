import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function JobDetails() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-lime-200 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lime-600"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" x2="4" y1="22" y2="15" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Claimable</h2>
            <p className="text-gray-500">Your denied healthcare claims, handled</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save</Button>
          <Button>Apply Now</Button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">Growth Product Manager</h1>
      <div className="flex gap-2 text-gray-600 mb-4">
        <span>$120k - $180k</span>
        <span>|</span>
        <span>Remote • San Francisco +4</span>
        <span>|</span>
        <span>3 years of exp</span>
        <span>|</span>
        <span>Full Time</span>
      </div>
      <p className="text-gray-500 mb-6">Posted: today • Recruiter recently active</p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Location</h3>
          <p>Remote • San Francisco • San Jose • Oakland • Sacramento • Des Moines</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Remote Work Policy</h3>
          <p>Onsite or remote</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hires remotely</h3>
          <p>Everywhere</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Preferred Timezones</h3>
          <p>Pacific Time, Central Time</p>
        </div>
       
        <div>
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Product Management</Badge>
            <Badge variant="secondary">SEO/SEM</Badge>
            <Badge variant="secondary">Product Marketing</Badge>
            <Badge variant="secondary">Conversion Optimization</Badge>
            <Badge variant="secondary">Email Marketing</Badge>
            <Badge variant="secondary">Content Marketing</Badge>
            <Badge variant="secondary">Web Analytics</Badge>
            <Badge variant="secondary">Marketing Management</Badge>
          </div>
        </div>
      </div>
      <div className="border-t pt-6 mt-4">
        <h3 className="text-2xl font-bold mb-4">Job Description</h3>
        <div className="space-y-4">
          <p>
            We are seeking a talented and experienced Growth Product Manager to join our team at Claimable. In this role,
            you will be responsible for driving product growth strategies and optimizing user acquisition and retention.
          </p>
          <h4 className="text-lg font-semibold">Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Develop and execute growth strategies to increase user acquisition and retention</li>
            <li>Analyze user behavior and market trends to identify growth opportunities</li>
            <li>Collaborate with cross-functional teams to implement and test new growth initiatives</li>
            <li>Monitor and report on key performance indicators (KPIs) related to growth</li>
            <li>Optimize the user onboarding experience and product funnel</li>
          </ul>
          <h4 className="text-lg font-semibold">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>3+ years of experience in product management or growth-related roles</li>
            <li>Strong analytical skills and experience with data-driven decision making</li>
            <li>Excellent communication and collaboration skills</li>
            <li>Experience with A/B testing and experimentation frameworks</li>
            <li>Familiarity with SEO/SEM, content marketing, and email marketing strategies</li>
          </ul>
          <p>
            If you're passionate about driving product growth and have a track record of success in similar roles, we'd love
            to hear from you. Join us in our mission to revolutionize healthcare claim management!
          </p>
        </div>
      </div>
    </div>
  )
}