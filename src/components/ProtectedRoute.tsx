import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Lock } from 'lucide-react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-accent-cyan" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Sign In Required</h1>
          <p className="text-gray-400 mb-6">Please sign in with your Google account to access this content.</p>
          <Navigate to="/" replace />
        </div>
      </div>
    )
  }

  return <>{children}</>
}
