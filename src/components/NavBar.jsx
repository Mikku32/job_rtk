
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="bg-black border-b border-gray-600 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-semibold">Home</Link>
            </div>
            <div className="hidden md:-my-px md:mr-2 md:ml-4 md:flex md:items-center">
              <Link to="/jobs" className="ml-4 text-gray-300 hover:text-white">
                Jobs
              </Link>
            </div>
            <div>
              <Link to="/post" className="ml-4 text-gray-300 hover:text-white">
                Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

