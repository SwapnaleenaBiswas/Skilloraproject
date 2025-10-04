import { useState } from 'react';
import { Upload, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [resumeUploaded, setResumeUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Set Up Your Profile</h1>
          <p className="text-xl text-gray-600">Let our AI Copilot help you get started</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                } font-medium transition-colors`}>
                  {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                </div>
                {num < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > num ? 'bg-blue-600' : 'bg-gray-200'
                  } transition-colors`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span>AI-Powered Profile Building</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Upload Your Resume</h2>
                <p className="text-gray-600">Our AI will automatically extract your information</p>
              </div>

              <div className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
                resumeUploaded ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-500'
              }`}>
                {resumeUploaded ? (
                  <div className="space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                    <p className="text-lg font-medium text-green-900">Resume uploaded successfully!</p>
                    <p className="text-sm text-green-700">AI is processing your information...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-2">Drop your resume here</p>
                      <p className="text-sm text-gray-500">or click to browse</p>
                    </div>
                    <p className="text-xs text-gray-400">PDF, DOC, or DOCX up to 5MB</p>
                  </div>
                )}
              </div>

              {!resumeUploaded && (
                <button
                  onClick={() => setResumeUploaded(true)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Choose File
                </button>
              )}

              {resumeUploaded && (
                <button
                  onClick={() => setStep(2)}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}

              <div className="text-center text-sm text-gray-500">
                Don't have a resume? <button className="text-blue-600 hover:underline">Fill manually</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Review Your Profile</h2>
                <p className="text-gray-600">AI has extracted this information from your resume</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Kumar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="sarah.kumar@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue="Bangalore, Karnataka"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <input
                    type="number"
                    defaultValue="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 p-4 border border-gray-300 rounded-lg">
                    {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill} ×
                      </span>
                    ))}
                  </div>
                  <button className="mt-2 text-sm text-blue-600 hover:underline">Add more skills</button>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">Profile Complete!</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Your profile has been created. Our AI Copilot is now analyzing job matches for you.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="text-left">
                    <p className="font-medium text-blue-900 mb-2">AI Copilot Found 12 Matches</p>
                    <p className="text-sm text-blue-800">
                      Based on your skills and experience, we've found several highly relevant positions in your area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/candidate"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <span>Go to Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/jobs"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  <span>Browse Jobs</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
