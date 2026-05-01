import { Link, useLocation } from 'react-router-dom'
import { BookOpen, GitCompare, HelpCircle, Library, Menu, X, Network } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { path: '/', label: 'Home', icon: BookOpen },
  { path: '/concepts', label: 'Concepts', icon: Network },
  { path: '/compare', label: 'Compare', icon: GitCompare },
  { path: '/quiz', label: 'Quiz', icon: HelpCircle },
  { path: '/glossary', label: 'Glossary', icon: Library },
]

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg">Repo & CCP Learning</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === path
                  ? 'text-accent-cyan bg-dark-700'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-b border-dark-600">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium ${
                location.pathname === path
                  ? 'text-accent-cyan bg-dark-700'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
