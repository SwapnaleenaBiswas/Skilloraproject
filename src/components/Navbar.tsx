import { Link } from 'react-router-dom';
import { Briefcase, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Skillora</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Find Jobs
            </Link>
            <Link to="/recruiter" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              For Employers
            </Link>
            <Link to="/candidate" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
