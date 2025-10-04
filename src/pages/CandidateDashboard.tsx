import { useState } from 'react';
import { Upload, Sparkles, FileText, Target, TrendingUp, CheckCircle, Clock, Bot } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function CandidateDashboard() {
  const [showCopilot, setShowCopilot] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
          <p className="text-gray-600 mt-1">Let's find your next opportunity</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">12</span>
            </div>
            <h3 className="text-gray-600 font-medium">Recommended Jobs</h3>
            <p className="text-sm text-gray-500 mt-1">Based on your profile</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">5</span>
            </div>
            <h3 className="text-gray-600 font-medium">Applications Sent</h3>
            <p className="text-sm text-gray-500 mt-1">In the last 30 days</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-3xl font-bold text-gray-900">3</span>
            </div>
            <h3 className="text-gray-600 font-medium">Pending Interviews</h3>
            <p className="text-sm text-gray-500 mt-1">Schedule your slots</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Bot className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Candidate Copilot</h3>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">AI-Powered</span>
                  </div>
                  <p className="text-white/90 mb-4">
                    Your AI assistant is ready to help you find jobs, optimize your profile, and tailor applications.
                  </p>
                  <button
                    onClick={() => setShowCopilot(!showCopilot)}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
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
                  <Bot className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Copilot Suggestions</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-900 mb-2">
                      <strong>Job Match Found:</strong> Senior Full Stack Developer at TechCorp India
                    </p>
                    <p className="text-sm text-blue-800 mb-3">
                      95% match based on your React, TypeScript, and Node.js experience. Located in Bangalore.
                    </p>
                    <Link to="/jobs/1" className="text-sm text-blue-600 font-medium hover:underline">
                      View Job Details →
                    </Link>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-900 mb-2">
                      <strong>Profile Tip:</strong> Add your latest certification
                    </p>
                    <p className="text-sm text-green-800 mb-3">
                      Adding your AWS certification could increase your match score by 8% for cloud-related roles.
                    </p>
                    <button className="text-sm text-green-600 font-medium hover:underline">
                      Update Profile →
                    </button>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-orange-900 mb-2">
                      <strong>Application Assistant:</strong> Tailor your cover letter
                    </p>
                    <p className="text-sm text-orange-800 mb-3">
                      I can help customize your application for the AI/ML Engineer position at DataSystems.
                    </p>
                    <button className="text-sm text-orange-600 font-medium hover:underline">
                      Get Help →
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Applications</h3>
              <div className="space-y-4">
                {[
                  { company: 'TechCorp India', role: 'Senior Full Stack Developer', status: 'Under Review', date: '2 days ago' },
                  { company: 'DataSystems', role: 'AI/ML Engineer', status: 'Interview Scheduled', date: '5 days ago' },
                  { company: 'StartupHub', role: 'Frontend Developer', status: 'Application Sent', date: '1 week ago' }
                ].map((app, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{app.role}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === 'Interview Scheduled' ? 'bg-green-100 text-green-700' :
                        app.status === 'Under Review' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {app.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Completion</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">85% Complete</span>
                  <span className="text-sm font-medium text-blue-600">Almost there!</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Basic info added</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Resume uploaded</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Skills verified</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Add certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Resume</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">Drop your resume here</p>
                <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Choose File
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/jobs" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">Browse Jobs</span>
                </Link>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Skill Assessments</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
