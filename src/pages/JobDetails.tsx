import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Clock, Building, Users, Sparkles, ArrowLeft, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function JobDetails() {
  const { id } = useParams();

  const job = {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    posted: '2 days ago',
    matchScore: 95,
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    matchReason: 'Strong match on React, TypeScript, and full-stack experience',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    responsibilities: [
      'Design and develop scalable web applications using React and Node.js',
      'Collaborate with cross-functional teams to define and ship new features',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to team knowledge sharing',
      'Optimize applications for maximum performance and scalability'
    ],
    requirements: [
      '5+ years of experience in full-stack development',
      'Strong proficiency in React, TypeScript, and Node.js',
      'Experience with PostgreSQL or other relational databases',
      'Familiarity with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Health insurance for you and your family',
      'Flexible work hours and remote work options',
      'Learning and development budget',
      'Modern office with great amenities'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/jobs" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Jobs</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-3">{job.title}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="h-5 w-5" />
                  <span className="text-xl">{job.company}</span>
                </div>
              </div>
              <span className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg text-lg font-medium">
                <Sparkles className="h-5 w-5" />
                <span>{job.matchScore}% Match</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>{job.type}</span>
              </span>
              <span className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>{job.salary}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Posted {job.posted}</span>
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 mb-1">Why this is a great match for you:</p>
                  <p className="text-sm text-blue-800">{job.matchReason}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-medium text-lg">
                  <Send className="h-5 w-5" />
                  <span>Apply Now</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
                  <Users className="h-5 w-5" />
                  <span>Save Job</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Our AI Copilot can help you tailor your application for this role
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
