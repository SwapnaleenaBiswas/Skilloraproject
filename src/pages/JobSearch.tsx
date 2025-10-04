import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, DollarSign, Clock, Sparkles, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';

const mockJobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    posted: '2 days ago',
    matchScore: 95,
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    matchReason: 'Strong match on React, TypeScript, and full-stack experience'
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    company: 'DataSystems',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹20-30 LPA',
    posted: '1 day ago',
    matchScore: 88,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
    matchReason: 'Excellent Python skills and ML framework experience'
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'StartupHub',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    posted: '3 days ago',
    matchScore: 82,
    skills: ['React', 'JavaScript', 'CSS', 'UI/UX'],
    matchReason: 'Good match on frontend technologies and React expertise'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudWorks',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹15-22 LPA',
    posted: '5 days ago',
    matchScore: 76,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    matchReason: 'Match on cloud infrastructure and containerization skills'
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Delhi NCR',
    type: 'Full-time',
    salary: '₹25-35 LPA',
    posted: '1 week ago',
    matchScore: 70,
    skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Leadership'],
    matchReason: 'Partial match on product management and technical background'
  }
];

export default function JobSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, skills, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
              Search Jobs
            </button>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>AI-powered matching enabled</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-600">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recommended Jobs</h2>
              <p className="text-gray-600 mt-1">{mockJobs.length} jobs matched to your profile</p>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/jobs/${job.id}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="inline-flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          <Sparkles className="h-3 w-3" />
                          <span>{job.matchScore}% Match</span>
                        </span>
                      </div>

                      <p className="text-lg text-gray-700 mb-3">{job.company}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-900">
                          <strong>Why this matches:</strong> {job.matchReason}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
