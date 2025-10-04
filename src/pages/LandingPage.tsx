import { Link } from 'react-router-dom';
import { Search, Sparkles, Target, Shield, TrendingUp, Users, Briefcase, Bot } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Job Matching</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Find Your Perfect Match<br />
            <span className="text-blue-600">With Explainable AI</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Skillora combines advanced AI with transparent matching to connect candidates and recruiters.
            Get personalized recommendations with clear explanations for every match.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs" className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-lg font-medium">
              <Search className="h-5 w-5" />
              <span>Find Jobs</span>
            </Link>
            <Link to="/recruiter" className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all shadow-lg border-2 border-blue-600 text-lg font-medium">
              <Briefcase className="h-5 w-5" />
              <span>Post a Job</span>
            </Link>
          </div>

          <div className="pt-8 flex justify-center space-x-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>30-50% faster screening</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>15-25% better conversion</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>100% explainable matches</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Skillora Works</h2>
          <p className="text-xl text-gray-600">AI-powered copilots for both candidates and recruiters</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Candidate Copilot</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Automatically builds your profile from resume</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Recommends perfectly matched roles with explanations</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Helps tailor applications for each position</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Shows match scores based on skills, experience, and location</span>
              </li>
            </ul>
            <Link to="/profile/setup" className="mt-8 block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recruiter Copilot</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Assists in drafting clear job descriptions</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Highlights top applicants with detailed reasoning</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Suggests optimal interview slots automatically</span>
              </li>
              <li className="flex items-start space-x-3">
                <Bot className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Reduces screening time by 30-50%</span>
              </li>
            </ul>
            <Link to="/recruiter" className="mt-8 block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Transparent, Explainable Matching</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Every recommendation comes with clear explanations showing why it's a match based on skills,
            experience, location, and more. No black boxes, just intelligent matching you can trust.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/jobs" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg">
              Explore Jobs
            </Link>
            <Link to="/recruiter" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Skillora</span>
            </div>
            <p className="text-sm">AI-Powered Job Marketplace with Explainable Matching</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
