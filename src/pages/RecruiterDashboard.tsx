import { useState } from 'react';
import { Plus, Users, Briefcase, TrendingUp, Bot, Sparkles, Calendar, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function RecruiterDashboard() {
  const [showCopilot, setShowCopilot] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your job postings and candidates</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-medium">
            <Plus className="h-5 w-5" />
            <span>Post New Job</span>
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">8</span>
            </div>
            <h3 className="text-gray-600 font-medium">Active Jobs</h3>
            <p className="text-sm text-gray-500 mt-1">Currently hiring</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">247</span>
            </div>
            <h3 className="text-gray-600 font-medium">Total Applicants</h3>
            <p className="text-sm text-gray-500 mt-1">Across all jobs</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">34</span>
            </div>
            <h3 className="text-gray-600 font-medium">Shortlisted</h3>
            <p className="text-sm text-gray-500 mt-1">Ready for interviews</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">12</span>
            </div>
            <h3 className="text-gray-600 font-medium">Interviews</h3>
            <p className="text-sm text-gray-500 mt-1">This week</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Bot className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Recruiter Copilot</h3>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">AI-Powered</span>
                  </div>
                  <p className="text-white/90 mb-4">
                    Your AI assistant helps draft job descriptions, highlight top candidates, and schedule interviews.
                  </p>
                  <button
                    onClick={() => setShowCopilot(!showCopilot)}
                    className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    {showCopilot ? 'Hide Copilot' : 'Open Copilot'}
                  </button>
                </div>
                <Sparkles className="h-12 w-12 text-white/80" />
              </div>
            </div>

            {showCopilot && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="h-5 w-5 text-green-600" />
                  <h3 className="font-bold text-gray-900">Copilot Recommendations</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-900 mb-2">
                      <strong>Top Candidate Alert:</strong> Sarah Kumar for Senior Full Stack Developer
                    </p>
                    <p className="text-sm text-green-800 mb-3">
                      95% match score. Strong React and TypeScript skills, 5 years experience, currently in Bangalore.
                      Recommending immediate interview.
                    </p>
                    <button className="text-sm text-green-600 font-medium hover:underline">
                      View Profile →
                    </button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900 mb-2">
                      <strong>Interview Scheduling:</strong> 3 optimal time slots available
                    </p>
                    <p className="text-sm text-blue-800 mb-3">
                      Based on your calendar and candidate availability: Tomorrow 2PM, Friday 10AM, or Monday 3PM.
                    </p>
                    <button className="text-sm text-blue-600 font-medium hover:underline">
                      Schedule Interview →
                    </button>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-900 mb-2">
                      <strong>Job Description Optimization:</strong> Improve your DevOps posting
                    </p>
                    <p className="text-sm text-orange-800 mb-3">
                      Adding "Docker" and "Kubernetes" keywords could increase qualified applicants by 40%.
                    </p>
                    <button className="text-sm text-orange-600 font-medium hover:underline">
                      Update Posting →
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Active Job Postings</h3>
              <div className="space-y-4">
                {[
                  { title: 'Senior Full Stack Developer', applicants: 45, shortlisted: 8, posted: '5 days ago', status: 'Active' },
                  { title: 'AI/ML Engineer', applicants: 32, shortlisted: 6, posted: '1 week ago', status: 'Active' },
                  { title: 'DevOps Engineer', applicants: 28, shortlisted: 5, posted: '2 weeks ago', status: 'Active' }
                ].map((job, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{job.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">Posted {job.posted}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {job.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Applicants:</span>
                        <span className="font-medium text-gray-900 ml-2">{job.applicants}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Shortlisted:</span>
                        <span className="font-medium text-gray-900 ml-2">{job.shortlisted}</span>
                      </div>
                    </div>
                    <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
                      View Applicants →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Candidates</h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Kumar', role: 'Full Stack Dev', match: 95, location: 'Bangalore' },
                  { name: 'Rahul Sharma', role: 'AI/ML Engineer', match: 92, location: 'Hyderabad' },
                  { name: 'Priya Patel', role: 'Frontend Dev', match: 88, location: 'Mumbai' }
                ].map((candidate, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{candidate.name}</h4>
                      <span className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        <Sparkles className="h-3 w-3" />
                        <span>{candidate.match}%</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{candidate.role}</p>
                    <p className="text-xs text-gray-500">{candidate.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Interviews</h3>
              <div className="space-y-3">
                {[
                  { candidate: 'Sarah Kumar', role: 'Full Stack Dev', time: 'Today, 2:00 PM' },
                  { candidate: 'Amit Singh', role: 'DevOps Eng', time: 'Tomorrow, 10:00 AM' },
                  { candidate: 'Neha Verma', role: 'AI/ML Eng', time: 'Friday, 3:00 PM' }
                ].map((interview, idx) => (
                  <div key={idx} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">{interview.candidate}</p>
                    <p className="text-xs text-gray-600">{interview.role}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <Calendar className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">{interview.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Plus className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">Create Job Post</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Review Applications</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">Schedule Interviews</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
